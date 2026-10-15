// ==========================================================================
//  Omabell Multi-Step Form Script
//  Includes dynamic validation, i18n support, and async location lookup
// ==========================================================================

const form = document.getElementById("signupForm");
const steps = [...form.querySelectorAll("[data-step]")];
const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");
const submitButton = document.getElementById("submitButton");
const submitButtonLabel = document.getElementById("submitButtonLabel");
const submitStatus = document.getElementById("submitStatus");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const passwordStrength = document.getElementById("passwordStrength");
const passwordMeter = document.getElementById("passwordMeter");
const disabilityDetails = document.getElementById("disabilityDetails");
const disabilityType = document.getElementById("disabilityType");
const childrenDetails = document.getElementById("childrenDetails");
const childrenCountField = document.getElementById("childrenCountField");
const childrenCount = document.getElementById("childrenCount");
const countryInput = document.getElementById("nationality");
const stateInput = document.getElementById("stateOfOrigin");
const stateOptions = document.getElementById("stateOptions");
const lgaOptions = document.getElementById("lgaOptions");
const languageSwitcher = document.getElementById("languageSwitcher");

let activeStep = 1;
let currentLang = localStorage.getItem("preferredLanguage") || "en";
let nigeriaLocationsPromise;
let nigeriaLocations = [];
let countryNamesPromise;
let locationUpdateTimer;

const foreignStatesCache = new Map();
const foreignCitiesCache = new Map();
const autocompleteMenus = new Map();

const radioGroups = [
  { name: "Has disability", messageId: "disabilityChoiceMessage", step: 1 },
  { name: "Married", messageId: "marriedMessage", step: 2 },
  { name: "Has children", messageId: "childrenMessage", step: 2 },
];

const phoneGroups = [
  {
    controls: ["phoneCountryCode", "phone"],
    messageId: "phoneMessage",
    step: 1,
  },
  {
    controls: ["kinCountryCode", "kinPhone"],
    messageId: "kinPhoneMessage",
    step: 2,
  },
];

const nigeriaLocationsUrl =
  "https://raw.githubusercontent.com/Xavier-Platinum/nigeria-states-lgas/main/src/statesAndLocalGov.json";
const countryServiceUrl = "https://countriesnow.space/api/v0.1";

document.documentElement.classList.add("js-enabled");

// Minimum age check: 16 years minimum, 120 years maximum
const dobInput = document.getElementById("dateOfBirth");
const today = new Date();
const minAgeDate = new Date(
  today.getFullYear() - 16,
  today.getMonth(),
  today.getDate(),
);
const maxAgeDate = new Date(
  today.getFullYear() - 120,
  today.getMonth(),
  today.getDate(),
);
dobInput.max = minAgeDate.toISOString().slice(0, 10);
dobInput.min = maxAgeDate.toISOString().slice(0, 10);

// ──────────────────────────────────────────────
//  INTERNATIONALIZATION (i18n)
// ──────────────────────────────────────────────
function getTranslation(key, params = {}) {
  const langData =
    typeof translations !== "undefined"
      ? translations[currentLang] || translations.en
      : {};
  let text =
    langData[key] ||
    (translations && translations.en && translations.en[key]) ||
    key;
  for (const [k, v] of Object.entries(params)) {
    text = text.replace(`{${k}}`, v);
  }
  return text;
}

function applyLanguage(lang) {
  if (typeof translations === "undefined" || !translations[lang]) return;
  currentLang = lang;
  localStorage.setItem("preferredLanguage", lang);

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  if (languageSwitcher) languageSwitcher.value = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    el.textContent = getTranslation(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    el.placeholder = getTranslation(key);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.dataset.i18nAriaLabel;
    el.setAttribute("aria-label", getTranslation(key));
  });

  updatePasswordStrength();
  updateStepControls();
}

if (languageSwitcher) {
  languageSwitcher.addEventListener("change", (e) => {
    applyLanguage(e.target.value);
  });
}

// ──────────────────────────────────────────────
//  LOCATION LOOKUPS
// ──────────────────────────────────────────────
function getLocationData() {
  if (!nigeriaLocationsPromise) {
    nigeriaLocationsPromise = fetch(nigeriaLocationsUrl)
      .then((response) => {
        if (!response.ok) throw new Error("Location list unavailable");
        return response.json();
      })
      .catch(() => null);
  }
  return nigeriaLocationsPromise;
}

async function fetchCountryService(path, body) {
  try {
    const response = await fetch(`${countryServiceUrl}/${path}`, {
      method: body ? "POST" : "GET",
      headers: body ? { "Content-Type": "application/json" } : undefined,
      body: body ? JSON.stringify(body) : undefined,
    });
    if (!response.ok) return [];
    const result = await response.json();
    return result.data ?? [];
  } catch {
    return [];
  }
}

function getCountryNames() {
  if (!countryNamesPromise) {
    countryNamesPromise = fetchCountryService("countries").then((countries) =>
      countries.map((entry) => entry.country).filter(Boolean),
    );
  }
  return countryNamesPromise;
}

function getForeignStates(country) {
  const key = country.toLowerCase();
  if (!foreignStatesCache.has(key)) {
    foreignStatesCache.set(
      key,
      fetchCountryService("countries/states", { country }).then(
        (result) =>
          result.states?.map((entry) => entry.name).filter(Boolean) ?? [],
      ),
    );
  }
  return foreignStatesCache.get(key);
}

function getForeignCities(country, state) {
  const key = `${country.toLowerCase()}|${state.toLowerCase()}`;
  if (!foreignCitiesCache.has(key)) {
    foreignCitiesCache.set(
      key,
      fetchCountryService("countries/state/cities", { country, state }),
    );
  }
  return foreignCitiesCache.get(key);
}

function fillSuggestions(list, values) {
  list.replaceChildren(
    ...values.map((value) => {
      const option = document.createElement("option");
      option.value = value;
      return option;
    }),
  );
  const autocomplete = autocompleteMenus.get(list);
  if (autocomplete) {
    renderAutocomplete(autocomplete.input, list, autocomplete.menu);
  }
}

function renderAutocomplete(input, list, menu) {
  const query = input.value.trim().toLocaleLowerCase();
  const values = [...list.options]
    .map((option) => option.value)
    .filter((value) => !query || value.toLocaleLowerCase().startsWith(query))
    .slice(0, 30);

  menu.replaceChildren(
    ...values.map((value) => {
      const option = document.createElement("div");
      option.className = "autocomplete__option";
      option.setAttribute("role", "option");
      option.textContent = value;
      option.addEventListener("mousedown", (event) => event.preventDefault());
      option.addEventListener("click", () => {
        input.value = value;
        input.dispatchEvent(new Event("input", { bubbles: true }));
        menu.hidden = true;
        input.setAttribute("aria-expanded", "false");
      });
      return option;
    }),
  );

  const shouldOpen = document.activeElement === input && values.length > 0;
  menu.hidden = !shouldOpen;
  input.setAttribute("aria-expanded", String(shouldOpen));
}

function connectAutocomplete(inputId, listId) {
  const input = document.getElementById(inputId);
  const list = document.getElementById(listId);
  const wrapper = document.createElement("div");
  wrapper.className = "autocomplete";
  input.parentNode.insertBefore(wrapper, input);
  wrapper.append(input);
  input.removeAttribute("list");
  input.setAttribute("role", "combobox");
  input.setAttribute("aria-autocomplete", "list");
  input.setAttribute("aria-expanded", "false");
  input.setAttribute("aria-controls", `${listId}Menu`);

  const menu = document.createElement("div");
  menu.className = "autocomplete__list";
  menu.id = `${listId}Menu`;
  menu.setAttribute("role", "listbox");
  menu.hidden = true;
  wrapper.append(menu);
  autocompleteMenus.set(list, { input, menu });

  input.addEventListener("focus", () => renderAutocomplete(input, list, menu));
  input.addEventListener("input", () => renderAutocomplete(input, list, menu));
  input.addEventListener("blur", () => {
    menu.hidden = true;
    input.setAttribute("aria-expanded", "false");
  });
  input.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      menu.hidden = true;
      input.setAttribute("aria-expanded", "false");
      return;
    }

    const options = [...menu.querySelectorAll('[role="option"]')];
    if (!options.length) return;
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const current = options.findIndex(
        (option) => option.getAttribute("aria-selected") === "true",
      );
      const offset = event.key === "ArrowDown" ? 1 : -1;
      const next = (current + offset + options.length) % options.length;
      options.forEach((option, index) =>
        option.setAttribute("aria-selected", String(index === next)),
      );
      options[next].scrollIntoView({ block: "nearest" });
    } else if (event.key === "Enter" && !menu.hidden) {
      const selected = options.find(
        (option) => option.getAttribute("aria-selected") === "true",
      );
      if (selected) {
        event.preventDefault();
        selected.click();
      }
    }
  });
}

async function updateLocationOptions() {
  fillSuggestions(stateOptions, []);
  fillSuggestions(lgaOptions, []);

  const country = countryInput.value.trim();
  if (!country) return;

  if (country.toLowerCase() === "nigeria") {
    const locations = await getLocationData();
    if (!locations || countryInput.value.trim().toLowerCase() !== "nigeria") {
      return;
    }

    nigeriaLocations = locations;
    fillSuggestions(
      stateOptions,
      locations.map((entry) => entry.state),
    );
    await updateLgaOptions();
    return;
  }

  const states = await getForeignStates(country);
  if (countryInput.value.trim().toLowerCase() !== country.toLowerCase()) return;
  fillSuggestions(stateOptions, states);
  await updateLgaOptions();
}

function scheduleLocationUpdate() {
  clearTimeout(locationUpdateTimer);
  locationUpdateTimer = setTimeout(updateLocationOptions, 300);
}

async function updateLgaOptions() {
  fillSuggestions(lgaOptions, []);
  const country = countryInput.value.trim();
  const stateValue = stateInput.value.trim();
  if (!country || !stateValue) return;

  const state = stateValue.toLowerCase();
  if (country.toLowerCase() === "nigeria") {
    const lgaEntry = nigeriaLocations.find(
      (entry) => entry.state.toLowerCase() === state,
    );
    fillSuggestions(lgaOptions, lgaEntry?.lgas ?? []);
    return;
  }

  const states = await getForeignStates(country);
  const matchingState = states.find((entry) => entry.toLowerCase() === state);
  if (!matchingState) return;

  const cities = await getForeignCities(country, matchingState);
  if (
    countryInput.value.trim().toLowerCase() !== country.toLowerCase() ||
    stateInput.value.trim().toLowerCase() !== state
  )
    return;
  fillSuggestions(lgaOptions, cities);
}

// ──────────────────────────────────────────────
//  VALIDATION HELPERS
// ──────────────────────────────────────────────
function getMessageFor(control) {
  return document.getElementById(`${control.id}Message`);
}

function getValidationMessage(control) {
  if (control.validity.valueMissing) return getTranslation("errorRequired");
  if (control.validity.typeMismatch) return getTranslation("errorEmail");
  if (control.validity.tooShort) {
    if (control.id === "address") return getTranslation("errorAddressTooShort");
    return getTranslation("errorTooShort", { min: control.minLength });
  }
  if (control.validity.patternMismatch) {
    const patternKey = control.dataset.errorPattern;
    if (patternKey) return getTranslation(patternKey);
    return getTranslation("errorFallback");
  }
  if (control.validity.rangeOverflow) return getTranslation("errorMinAge");
  if (control.validity.rangeUnderflow) return getTranslation("errorFallback");
  if (control.validity.customError) return control.validationMessage;
  return getTranslation("errorFallback");
}

function validateControl(control, showEmpty = false) {
  if (control.id === "confirmPassword") {
    const mismatch =
      confirmPasswordInput.value &&
      confirmPasswordInput.value !== passwordInput.value;
    control.setCustomValidity(
      mismatch ? getTranslation("errorPasswordMismatch") : "",
    );
  }

  if (control.id === "houseImage") {
    const file = control.files && control.files[0];
    if (file) {
      const isPdf =
        file.type === "application/pdf" ||
        file.name.toLowerCase().endsWith(".pdf");
      const isImage = file.type.startsWith("image/");
      const maxSize = 200 * 1024; // 200 KB

      if (isPdf || !isImage) {
        control.setCustomValidity(getTranslation("errorImageOnly"));
      } else if (file.size > maxSize) {
        control.setCustomValidity(getTranslation("errorImageTooLarge"));
      } else {
        control.setCustomValidity("");
      }
    } else {
      control.setCustomValidity("");
    }
  }

  const messageElement = getMessageFor(control);
  const isValid = control.checkValidity();
  const shouldShow =
    (control.type === "checkbox"
      ? control.checked
      : control.type === "file"
        ? Boolean(control.files && control.files.length)
        : control.value) || showEmpty;

  control.classList.toggle("is-invalid", !isValid && shouldShow);
  control.classList.remove("is-valid");
  control.setAttribute("aria-invalid", String(!isValid && shouldShow));

  if (messageElement) {
    messageElement.textContent =
      shouldShow && !isValid ? getValidationMessage(control) : "";
    messageElement.classList.remove("is-success");
    messageElement.classList.toggle("is-error", !isValid && shouldShow);
  }
  return isValid;
}

function requiredControls(stepNumber) {
  return steps[stepNumber - 1].querySelectorAll(
    "input:required:enabled, select:required:enabled, textarea:required:enabled",
  );
}

function isStepValid(stepNumber, showEmpty = false) {
  const controlsValid = [...requiredControls(stepNumber)].every((control) =>
    validateControl(control, showEmpty),
  );
  const radiosValid = radioGroups
    .filter((group) => group.step === stepNumber)
    .map((group) => updateRadioFeedback(group, showEmpty))
    .every(Boolean);
  const phonesValid = phoneGroups
    .filter((group) => group.step === stepNumber)
    .map((group) => updatePhoneFeedback(group, showEmpty))
    .every(Boolean);
  return controlsValid && radiosValid && phonesValid;
}

function updateRadioFeedback(group, showEmpty = false) {
  const controls = [
    ...form.querySelectorAll(`input[name="${group.name}"]:enabled`),
  ];
  const message = document.getElementById(group.messageId);
  const isRequired = controls.some((control) => control.required);
  const isSelected = controls.some((control) => control.checked);
  const shouldShow = isSelected || showEmpty;

  message.textContent =
    isRequired && shouldShow && !isSelected ? getTranslation("errorRadio") : "";
  message.classList.remove("is-success");
  message.classList.toggle("is-error", isRequired && shouldShow && !isSelected);
  return !isRequired || isSelected;
}

function updatePhoneFeedback(group, showEmpty = false) {
  const controls = group.controls.map((id) => document.getElementById(id));
  const message = document.getElementById(group.messageId);
  const isRequired = controls.some(
    (control) => control.required && !control.disabled,
  );
  const isValid = controls.every(
    (control) => control.disabled || control.checkValidity(),
  );
  const shouldShow =
    controls.slice(1).some((control) => control.value) || showEmpty;

  message.textContent =
    isRequired && shouldShow && !isValid
      ? getValidationMessage(
          controls.find(
            (control) => !control.disabled && !control.checkValidity(),
          ),
        )
      : "";
  message.classList.remove("is-success");
  message.classList.toggle("is-error", isRequired && shouldShow && !isValid);
  return !isRequired || isValid;
}

function updateStepControls() {
  steps.forEach((step) => {
    const isActive = Number(step.dataset.step) === activeStep;
    step.classList.toggle("is-active", isActive);
    step.setAttribute("aria-hidden", String(!isActive));
    step.querySelectorAll("input, select, textarea").forEach((control) => {
      control.disabled =
        !isActive || Boolean(control.closest(".conditional-field[hidden]"));
    });
  });

  document.querySelectorAll("[data-step-indicator]").forEach((indicator) => {
    const isCurrent = Number(indicator.dataset.stepIndicator) === activeStep;
    indicator.classList.toggle("is-current", isCurrent);
    if (isCurrent) indicator.setAttribute("aria-current", "step");
    else indicator.removeAttribute("aria-current");
  });

  radioGroups.forEach((group) => {
    if (group.step === activeStep) updateRadioFeedback(group);
  });
  phoneGroups.forEach((group) => {
    if (group.step === activeStep) updatePhoneFeedback(group);
  });

  nextButton.hidden = activeStep !== 1 || !isStepValid(1);
  backButton.hidden = activeStep !== 2;
  submitButton.disabled = activeStep !== 2 || !isStepValid(2);
}

function setConditionalVisibility(container, isVisible) {
  container.hidden = !isVisible;
}

function updateConditionalFields() {
  const hasDisability =
    form.querySelector('input[name="Has disability"]:checked')?.value === "Yes";
  const isMarried =
    form.querySelector('input[name="Married"]:checked')?.value === "Yes";
  const hasChildren =
    form.querySelector('input[name="Has children"]:checked')?.value === "Yes";

  setConditionalVisibility(disabilityDetails, hasDisability);
  disabilityType.required = hasDisability;

  setConditionalVisibility(childrenDetails, isMarried);
  form.querySelectorAll('input[name="Has children"]').forEach((control) => {
    control.required = isMarried;
  });

  setConditionalVisibility(childrenCountField, isMarried && hasChildren);
  childrenCount.required = isMarried && hasChildren;
  updateStepControls();
}

function updatePasswordStrength() {
  const value = passwordInput.value;
  const rules = [
    /[a-z]/.test(value),
    /[A-Z]/.test(value),
    /[0-9]/.test(value),
    /[^A-Za-z0-9]/.test(value),
  ];
  const score = rules.filter(Boolean).length + (value.length >= 12 ? 1 : 0);
  const strengthKey =
    !value || score < 4 ? "Weak" : score < 5 ? "Medium" : "Strong";
  const localizedLabel = !value
    ? getTranslation("strengthNotSet")
    : getTranslation(`strength${strengthKey}`);

  passwordMeter.value = value ? score : 0;
  passwordStrength.textContent = localizedLabel;
  passwordStrength.dataset.strength = value
    ? strengthKey.toLowerCase()
    : "none";
}

function showStep(stepNumber) {
  activeStep = stepNumber;
  updateStepControls();
  steps[stepNumber - 1].querySelector("h2").focus({ preventScroll: true });
  steps[stepNumber - 1].scrollIntoView({ behavior: "smooth", block: "start" });
}

// ──────────────────────────────────────────────
//  EVENT LISTENERS CONSOLIDATION
// ──────────────────────────────────────────────
function handleControlEvent(control) {
  if (control.id === "nin") {
    control.value = control.value.replace(/\D/g, "").slice(0, 11);
  }
  validateControl(control);
  if (control === passwordInput || control === confirmPasswordInput) {
    updatePasswordStrength();
    validateControl(confirmPasswordInput);
  }
  if (control === countryInput) scheduleLocationUpdate();
  if (control === stateInput) updateLgaOptions();
  if (["Has disability", "Married", "Has children"].includes(control.name)) {
    updateConditionalFields();
  } else {
    updateStepControls();
  }
}

form.querySelectorAll("input, select, textarea").forEach((control) => {
  ["input", "change"].forEach((eventName) => {
    control.addEventListener(eventName, () => handleControlEvent(control));
  });
});

connectAutocomplete("nationality", "countryOptions");
connectAutocomplete("stateOfOrigin", "stateOptions");
connectAutocomplete("lga", "lgaOptions");

document.getElementById("termsLink").addEventListener("click", (event) => {
  event.preventDefault();
  const terms = document.getElementById("terms-details");
  terms.open = true;
  terms.scrollIntoView({ behavior: "smooth", block: "nearest" });
  terms.querySelector("summary").focus();
});

countryInput.addEventListener("focus", async () => {
  const countryNames = await getCountryNames();
  if (countryNames.length) {
    fillSuggestions(document.getElementById("countryOptions"), countryNames);
  }
});

document.querySelectorAll("[data-toggle-password]").forEach((button) => {
  button.addEventListener("click", () => {
    const input = document.getElementById(button.dataset.togglePassword);
    const shouldShow = input.type === "password";
    input.type = shouldShow ? "text" : "password";
    button.textContent = shouldShow
      ? getTranslation("btnHide")
      : getTranslation("btnShow");
    button.setAttribute("aria-pressed", String(shouldShow));
    button.setAttribute(
      "aria-label",
      `${button.textContent} ${input.id === "password" ? getTranslation("labelPassword") : getTranslation("labelConfirmPassword")}`,
    );
  });
});

nextButton.addEventListener("click", () => {
  if (!isStepValid(1, true)) {
    form.reportValidity();
    updateStepControls();
    return;
  }
  showStep(2);
});

backButton.addEventListener("click", () => showStep(1));

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!isStepValid(2, true) || !isStepValid(1, true)) {
    form.reportValidity();
    updateStepControls();
    return;
  }

  if (location.protocol === "file:") {
    submitStatus.textContent = getTranslation("errorFileProtocol");
    submitStatus.classList.add("is-error");
    return;
  }

  const submission = new FormData();
  form
    .querySelectorAll("input[name], select[name], textarea[name]")
    .forEach((control) => {
      if (
        control.type === "password" ||
        control.closest(".conditional-field[hidden]")
      )
        return;
      if (
        (control.type === "radio" || control.type === "checkbox") &&
        !control.checked
      )
        return;
      if (control.type === "file") {
        const file = control.files && control.files[0];
        if (file) {
          submission.append(control.name, file);
        }
        return;
      }
      submission.append(control.name, control.value);
    });

  submitButton.disabled = true;
  if (submitButtonLabel) {
    submitButtonLabel.textContent = getTranslation("btnSending");
  } else {
    submitButton.textContent = getTranslation("btnSending");
  }
  submitStatus.textContent = getTranslation("statusSending");
  submitStatus.className = "submit-status";

  try {
    const response = await fetch(form.action, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: submission,
    });
    const responseText = await response.text();
    let result = {};
    try {
      result = JSON.parse(responseText);
    } catch {
      result = {};
    }
    if (
      !response.ok ||
      (result.success !== "true" && result.success !== true)
    ) {
      throw new Error(
        result.message ||
          result.error ||
          `FormSubmit returned HTTP ${response.status}.`,
      );
    }

    form.hidden = true;
    document.querySelector(".form-intro").hidden = true;
    document.getElementById("thankYou").hidden = false;
    document.getElementById("thankYou").focus();
  } catch (error) {
    const reason =
      error instanceof TypeError
        ? getTranslation("errorNoConnection")
        : error.message;
    submitStatus.textContent = `${getTranslation("errorSubmitPrefix")} ${reason} ${getTranslation("errorActivation")}`;
    submitStatus.classList.add("is-error");
    if (submitButtonLabel) {
      submitButtonLabel.textContent = getTranslation("btnSignUp");
    } else {
      submitButton.textContent = getTranslation("btnSignUp");
    }
    updateStepControls();
  }
});

// Initialization
updateConditionalFields();
updateLocationOptions();
updatePasswordStrength();
applyLanguage(currentLang);
showStep(1);
