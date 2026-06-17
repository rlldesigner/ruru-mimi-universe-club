const STORAGE_KEY = "ruruMimiCustomers";
const ADMIN_PASSWORD = "4436";
const ADMIN_SESSION_KEY = "ruruMimiAdminAuthenticated";
const REFERRED_CREDIT = 1000;
const REFERRER_CREDIT = 2000;
const REVIEW_CREDIT = 1000;
const LANGUAGE_KEY = "ruruMimiLanguage";
const GOOGLE_SHEETS_WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbz2rJGihNjsMl0mBg9_8YqfFx2BHzcNHwr8COSumm-T0FTigw3HDnUilAY5mM1agWgj/exec";

let currentLanguage = localStorage.getItem(LANGUAGE_KEY) || "ko";

const copy = {
  ko: {
    registerNav: "제품 등록",
    serviceNav: "구매 확인 · A/S",
    adminNav: "관리자",
    heroTitle: '작은 취향이 모여<br /><em>하나의 세계가 됩니다.</em>',
    heroCopy:
      '루루앤미미 제품을 등록하고, 유니버스 클럽만의<br class="desktop-only" /> 세심한 케어와 특별한 혜택을 만나보세요.',
    productRegistration: "제품 등록하기",
    customerInfo: "고객 정보",
    name: "이름",
    phone: "휴대폰 번호",
    address: "주소",
    petName: "반려동물 이름",
    email: "이메일",
    purchaseInfo: "구매 정보",
    product: "구매 제품",
    version: "제품 버전",
    color: "색상",
    secondColor: "두 번째 색상",
    purchaseDate: "구매 날짜",
    store: "구매처",
    storePlace: "구매 장소",
    referralTitle: "추천인 정보",
    optional: "선택",
    referralCopy: "추천받은 고객에게 1,000 크레딧, 추천한 고객에게 2,000 크레딧이 지급됩니다.",
    referralName: "추천인 이름 또는 추천 반려동물 이름",
    referralPhone: "추천인 전화번호 뒷자리",
    reviewUrl: "후기 링크",
    reviewHelp:
      "후기 확인 후 1,000 유니버스 클럽 크레딧이 지급됩니다. 비공개 계정은 확인이 안될 시 발행이 불가합니다.",
    consent: "개인정보 수집 및 이용에 동의합니다.",
    required: "(필수)",
    viewTerms: "내용 보기",
    registerSubmit: "유니버스 클럽 등록하기",
    serviceTitle: '내 구매 확인<br /><em>&amp; A/S 접수</em>',
    serviceCopy: "등록한 제품 정보와 시리얼 번호를 확인하고 새로운 A/S 문의를 접수하세요.",
    lookupTitle: "본인 구매 확인",
    registrationNumber: "등록번호",
    lookupError: "일치하는 구매 정보를 찾지 못했습니다. 등록번호와 휴대폰 번호를 확인해주세요.",
    lookupSubmit: "내 구매 정보 확인하기",
    recoveryToggle: "등록번호를 잊으셨나요?",
    recoveryHelp:
      "등록 시 입력한 이름, 휴대폰 번호, 이메일이 모두 일치하면 등록번호를 다시 확인할 수 있습니다.",
    recoverySubmit: "등록번호 찾기",
    recoveryError: "일치하는 등록 정보를 찾지 못했습니다.",
    useRecoveredNumber: "이 번호로 구매 확인",
    purchaseTitle: "구매 정보",
    creditUse: "포인트 사용법 보기",
    asLegend: "추가 A/S 문의 접수",
    inquiry: "문의 내용",
    overallPhoto: "제품 전체 사진",
    overallPhotoHelp: "제품 전체가 보이는 사진 1장",
    issuePhoto: "문제 부분 사진",
    issuePhotoHelp: "문제 부분이 잘 보이는 사진 1장 이상",
    photoRequired: "필수",
    selectPhoto: "사진 선택하기",
    uploadHelp: "JPG, PNG, HEIC 등 이미지 파일을 첨부할 수 있습니다.",
    asSubmit: "A/S 문의 접수하기",
    adminLoginTitle: "관리자 로그인",
    adminLoginCopy: "고객 정보와 A/S 내역은 관리자만 확인할 수 있습니다.",
    adminPassword: "관리자 비밀번호",
    adminLoginError: "비밀번호가 올바르지 않습니다.",
    adminLoginSubmit: "관리자 페이지 들어가기",
    adminHeading: "고객 등록 관리",
    adminCopy: "등록 고객과 후기, 쿠폰 및 A/S 진행 상태를 한눈에 관리하세요.",
    addCustomer: "고객 등록",
    csv: "CSV 다운로드",
    logout: "로그아웃",
    searchPlaceholder: "이름, 연락처, 등록번호 검색",
    successTitle: "등록이 완료되었습니다.",
    successCopy:
      "루루앤미미 유니버스 클럽의 멤버가 되신 것을 환영합니다.<br />제품을 위한 세심한 케어가 지금부터 시작됩니다.",
    copyNumber: "등록번호 복사",
    successProduct: "제품",
    successColor: "색상",
    successDate: "구매일",
    successNoteTitle: "중요 안내",
    successNote:
      "지금 표시된 시리얼 번호를 반드시 저장해 주세요.<br />시리얼 번호가 있어야 추후 구매 확인 및 A/S 접수가 가능합니다.",
    registerAnother: "다른 제품 등록하기",
    goToService: "내 구매 확인 · A/S 접수",
    privacyTitle: "개인정보 수집 및 이용",
    privacyCopy:
      "제품 등록, 고객 지원 및 혜택 제공을 위해 이름, 연락처, 주소, 이메일, 구매 정보와 A/S 접수 사진을 수집합니다. 정보는 서비스 제공 목적 달성 후 관련 법령에 따라 안전하게 파기됩니다.",
    confirm: "확인했습니다",
    creditTitle: "크레딧 사용 안내",
    creditCopy:
      "유니버스 클럽 크레딧 사용을 원하시면 포인트 화면을 캡쳐하거나 고객 정보를 네이버 스마트스토어 톡톡으로 문의해주세요. 확인 후 스토어 쿠폰을 발행해 드립니다.",
    selectProduct: "제품을 선택해주세요",
    selectVersion: "버전을 선택해주세요",
    selectProductFirst: "제품을 먼저 선택해주세요",
    selectVersionFirst: "버전을 먼저 선택해주세요",
    selectColor: "색상을 선택해주세요",
    selectSecondColor: "두 번째 색상을 선택해주세요",
    selectSecondColorShort: "두 번째 색상 선택",
    unknown: "모름",
    oeko: "<strong>OEKO-TEX 소재</strong>",
    regular: "일반 소재",
    unknownMaterial: "소재 정보 모름",
    purchaseFirstToast: "구매 정보를 먼저 확인해주세요.",
    photoSaveError: "사진 저장 중 문제가 발생했습니다. 다시 시도해주세요.",
    serviceSubmitted: "A/S 문의가 접수되었습니다.",
    copied: "등록번호를 복사했습니다.",
    fileCount: (count) => `${count}개 파일 선택됨`,
  },
  en: {
    registerNav: "Register",
    serviceNav: "Purchase / A/S",
    adminNav: "Admin",
    heroTitle: 'Small details gather<br /><em>into one universe.</em>',
    heroCopy:
      'Register your Ruru & Mimi product and enjoy<br class="desktop-only" /> thoughtful care and Universe Club benefits.',
    productRegistration: "Register Product",
    customerInfo: "Customer Information",
    name: "Name",
    phone: "Mobile Number",
    address: "Address",
    petName: "Pet Name",
    email: "Email",
    purchaseInfo: "Purchase Information",
    product: "Product",
    version: "Product Version",
    color: "Color",
    secondColor: "Second Color",
    purchaseDate: "Purchase Date",
    store: "Purchase Channel",
    storePlace: "Purchase Location",
    referralTitle: "Referral Information",
    optional: "Optional",
    referralCopy: "The referred customer receives 1,000 credits, and the referrer receives 2,000 credits.",
    referralName: "Referrer name or referred pet name",
    referralPhone: "Referrer phone last 4 digits",
    reviewUrl: "Review Link",
    reviewHelp:
      "After review confirmation, 1,000 Universe Club credits will be issued. Private accounts may not be eligible if the review cannot be verified.",
    consent: "I agree to the collection and use of personal information.",
    required: "(Required)",
    viewTerms: "View details",
    registerSubmit: "Join Universe Club",
    serviceTitle: 'Purchase Verification<br /><em>&amp; A/S Request</em>',
    serviceCopy: "Check your registered product and serial number, then submit a new A/S request.",
    lookupTitle: "Verify Purchase",
    registrationNumber: "Registration Number",
    lookupError: "No matching purchase record found. Please check your registration number and mobile number.",
    lookupSubmit: "Check My Purchase",
    recoveryToggle: "Forgot your registration number?",
    recoveryHelp:
      "If your name, mobile number, and email match the registration record, you can check your registration number again.",
    recoverySubmit: "Find Registration Number",
    recoveryError: "No matching registration information found.",
    useRecoveredNumber: "Check purchase with this number",
    purchaseTitle: "Purchase Information",
    creditUse: "How to use credits",
    asLegend: "Submit Additional A/S Request",
    inquiry: "Inquiry Details",
    overallPhoto: "Full Product Photo",
    overallPhotoHelp: "1 photo showing the whole product",
    issuePhoto: "Problem Area Photo",
    issuePhotoHelp: "At least 1 clear photo of the issue",
    photoRequired: "Required",
    selectPhoto: "Choose photo",
    uploadHelp: "You can attach image files such as JPG, PNG, or HEIC.",
    asSubmit: "Submit A/S Request",
    adminLoginTitle: "Admin Login",
    adminLoginCopy: "Customer information and A/S records are available to admins only.",
    adminPassword: "Admin Password",
    adminLoginError: "The password is incorrect.",
    adminLoginSubmit: "Enter Admin Page",
    adminHeading: "Customer Management",
    adminCopy: "Manage registered customers, reviews, credits, and A/S status in one place.",
    addCustomer: "Add Customer",
    csv: "Download CSV",
    logout: "Log Out",
    searchPlaceholder: "Search name, phone, or registration number",
    successTitle: "Registration Complete",
    successCopy:
      "Welcome to the Ruru & Mimi Universe Club.<br />Thoughtful care for your product starts now.",
    copyNumber: "Copy Registration Number",
    successProduct: "Product",
    successColor: "Color",
    successDate: "Purchase Date",
    successNoteTitle: "Important",
    successNote:
      "Please save the serial number shown here.<br />You will need it for future purchase verification and A/S requests.",
    registerAnother: "Register Another Product",
    goToService: "Purchase Verification / A/S",
    privacyTitle: "Collection and Use of Personal Information",
    privacyCopy:
      "We collect your name, contact information, address, email, purchase details, and A/S photos to provide product registration, customer support, and benefits. Information is securely deleted according to applicable laws after the service purpose is fulfilled.",
    confirm: "Got it",
    creditTitle: "How to Use Credits",
    creditCopy:
      "To use Universe Club credits, capture the credit screen or send your customer information through Naver Smart Store TalkTalk. After confirmation, we will issue a store coupon.",
    selectProduct: "Select a product",
    selectVersion: "Select a version",
    selectProductFirst: "Select a product first",
    selectVersionFirst: "Select a version first",
    selectColor: "Select a color",
    selectSecondColor: "Select the second color",
    selectSecondColorShort: "Select second color",
    unknown: "Unknown",
    oeko: "<strong>OEKO-TEX material</strong>",
    regular: "Standard material",
    unknownMaterial: "Material information unknown",
    purchaseFirstToast: "Please verify your purchase information first.",
    photoSaveError: "There was a problem saving the photos. Please try again.",
    serviceSubmitted: "Your A/S request has been submitted.",
    copied: "Registration number copied.",
    fileCount: (count) => `${count} file${count > 1 ? "s" : ""} selected`,
  },
};

function t(key) {
  return copy[currentLanguage]?.[key] ?? copy.ko[key] ?? key;
}

const productCodes = {
  "Gatz Mini": "GM",
  "Gatz U.P": "GU",
  "Gatz Twin": "GT",
};

const productNames = {
  "Gatz Mini": "Gatz Mini · 겟츠 미니",
  "Gatz U.P": "Gatz U.P · 겟츠 유피",
  "Gatz Twin": "Gatz Twin · 겟츠 트윈",
};

const productOptions = {
  "Gatz Mini": {
    versions: ["1", "2", "2.5", "모름"],
    colors: {
      1: [
        { name: "Bonobo Black", code: "BK", oeko: false },
        { name: "Vaquita Grey", code: "VG", oeko: false },
        { name: "Sloth Beige", code: "BG", oeko: false },
      ],
      2: [
        { name: "Bonobo Black", code: "BK", oeko: false },
        { name: "Sloth Beige", code: "BG", oeko: false },
        { name: "Forest Green", code: "FG", oeko: true },
      ],
      2.5: [
        { name: "Bonobo Black", code: "BK", oeko: true },
        { name: "Polar White", code: "PW", oeko: true },
        { name: "Forest Green", code: "FG", oeko: true },
      ],
      모름: [
        { name: "Bonobo Black", code: "BK", oeko: null },
        { name: "Vaquita Grey", code: "VG", oeko: null },
        { name: "Sloth Beige", code: "BG", oeko: null },
        { name: "Polar White", code: "PW", oeko: null },
        { name: "Forest Green", code: "FG", oeko: null },
      ],
    },
  },
  "Gatz U.P": {
    versions: ["모름"],
    colors: {
      모름: [
        { name: "Rhino Black", code: "RB", oeko: null },
        { name: "Beluga White", code: "BW", oeko: null },
      ],
    },
  },
  "Gatz Twin": {
    versions: ["모름"],
    chooseTwo: true,
    colors: {
      모름: [
        { name: "Bonobo Black", code: "BK", oeko: true },
        { name: "Forest Green", code: "FG", oeko: true },
        { name: "Sloth Beige", code: "BG", oeko: false },
      ],
    },
  },
};

const elements = {
  form: document.querySelector("#registrationForm"),
  product: document.querySelector("#productSelect"),
  version: document.querySelector("#versionSelect"),
  color: document.querySelector("#colorSelect"),
  secondColor: document.querySelector("#secondColorSelect"),
  secondColorField: document.querySelector("#secondColorField"),
  materialNote: document.querySelector("#materialNote"),
  purchaseDate: document.querySelector("#purchaseDate"),
  store: document.querySelector("#storeSelect"),
  storeDetail: document.querySelector("#storeDetailInput"),
  storeDetailField: document.querySelector("#storeDetailField"),
  lookupForm: document.querySelector("#lookupForm"),
  lookupError: document.querySelector("#lookupError"),
  recoveryToggle: document.querySelector("#recoveryToggle"),
  recoveryForm: document.querySelector("#recoveryForm"),
  recoveryError: document.querySelector("#recoveryError"),
  recoveryResults: document.querySelector("#recoveryResults"),
  purchaseResult: document.querySelector("#purchaseResult"),
  creditCard: document.querySelector("#creditCard"),
  creditTotal: document.querySelector("#creditTotal"),
  serviceForm: document.querySelector("#serviceForm"),
  adminLogin: document.querySelector("#adminLogin"),
  adminContent: document.querySelector("#adminContent"),
  adminLoginForm: document.querySelector("#adminLoginForm"),
  adminLoginError: document.querySelector("#adminLoginError"),
  serviceDetailDialog: document.querySelector("#serviceDetailDialog"),
  asManagementForm: document.querySelector("#asManagementForm"),
  creditIssueDialog: document.querySelector("#creditIssueDialog"),
  creditIssueForm: document.querySelector("#creditIssueForm"),
  creditIssueTarget: document.querySelector("#creditIssueTarget"),
  adminCustomerDialog: document.querySelector("#adminCustomerDialog"),
  adminCustomerForm: document.querySelector("#adminCustomerForm"),
  adminCustomerTitle: document.querySelector("#adminCustomerTitle"),
  adminProduct: document.querySelector("#adminProductSelect"),
  adminVersion: document.querySelector("#adminVersionSelect"),
  adminColor: document.querySelector("#adminColorSelect"),
  adminSecondColor: document.querySelector("#adminSecondColorSelect"),
  adminSecondColorField: document.querySelector("#adminSecondColorField"),
  adminStore: document.querySelector("#adminStoreSelect"),
  adminStoreDetailField: document.querySelector("#adminStoreDetailField"),
  customerDetailDialog: document.querySelector("#customerDetailDialog"),
  customerDetailGrid: document.querySelector("#customerDetailGrid"),
  customerCreditHistory: document.querySelector("#customerCreditHistory"),
  tableBody: document.querySelector("#customerTableBody"),
  emptyState: document.querySelector("#emptyState"),
  stats: document.querySelector("#stats"),
  search: document.querySelector("#adminSearch"),
  productFilter: document.querySelector("#productFilter"),
  asFilter: document.querySelector("#asFilter"),
  toast: document.querySelector("#toast"),
};

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function setHtml(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = value;
}

function setPlaceholder(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.placeholder = value;
}

function versionLabel(version) {
  return version === "모름" ? t("unknown") : version;
}

function statusLabel(status) {
  if (currentLanguage === "ko") return status || "-";
  return (
    {
      "문의 없음": "No inquiry",
      접수: "Received",
      회수예정: "Pickup scheduled",
      회수중: "Pickup in progress",
      처리중: "Processing",
      처리후발송중: "Shipping after service",
      처리완료: "Completed",
    }[status] ||
    status ||
    "-"
  );
}

function reasonLabel(reason) {
  if (currentLanguage === "ko") return reason || "크레딧 발행";
  return (
    {
      "추천 등록 크레딧": "Referral registration credit",
      "추천 등록 크레딧 - 추천 고객 확인 필요": "Referral credit - referrer verification needed",
      "후기 등록 크레딧": "Review credit",
      "추천인 크레딧": "Referrer credit",
      "관리자 크레딧 추가 조정": "Admin credit adjustment",
      "관리자 크레딧 차감 조정": "Admin credit deduction",
      "관리자 수동 발행": "Manual admin issue",
    }[reason] ||
    reason ||
    "Credit issued"
  );
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll(".language-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLanguage);
  });

  setText('[data-view="register"]', t("registerNav"));
  setText('[data-view="service"]', t("serviceNav"));
  setText('[data-view="admin"]', t("adminNav"));
  setHtml(".hero h1", t("heroTitle"));
  setHtml(".hero > p", t("heroCopy"));
  setText(".form-panel .section-heading h2", t("productRegistration"));
  setText("#registrationForm fieldset:nth-of-type(1) legend", t("customerInfo"));
  const registrationLabels = [
    [0, `${t("name")} *`],
    [1, `${t("phone")} *`],
    [2, `${t("address")} *`],
    [3, `${t("petName")} *`],
    [4, `${t("email")} *`],
    [5, `${t("product")} *`],
    [6, `${t("version")} *`],
    [7, `${t("color")} *`],
    [8, `${t("secondColor")} *`],
    [9, `${t("purchaseDate")} *`],
    [10, `${t("store")} *`],
    [11, `${t("storePlace")} *`],
    [12, t("referralName")],
    [13, t("referralPhone")],
    [14, `${t("reviewUrl")} ${t("optional")}`],
  ];
  document.querySelectorAll("#registrationForm .field > span").forEach((span, index) => {
    const label = registrationLabels.find(([labelIndex]) => labelIndex === index)?.[1];
    if (!label) return;
    span.innerHTML = label.replace(" *", ' <b>*</b>').replace(t("optional"), `<i>${t("optional")}</i>`);
  });
  setText("#registrationForm fieldset:nth-of-type(2) legend", t("purchaseInfo"));
  setText(".referral-box > p", t("referralTitle"));
  document.querySelector(".referral-box > p")?.insertAdjacentHTML("beforeend", ` <i>${t("optional")}</i>`);
  setText(".referral-box > small", t("referralCopy"));
  setText('#registrationForm [name="reviewUrl"] + small', t("reviewHelp"));
  setHtml(".consent span", `${t("consent")} <b>${t("required")}</b>`);
  setText("#privacyOpen", t("viewTerms"));
  setText("#registrationForm .primary-button span", t("registerSubmit"));

  setHtml(".service-hero h1", t("serviceTitle"));
  setText(".service-hero > p:last-child", t("serviceCopy"));
  setText("#lookupPanel .section-heading h2", t("lookupTitle"));
  setText('#lookupForm [name="registrationNumber"]', "");
  const lookupLabels = document.querySelectorAll("#lookupForm .field > span");
  if (lookupLabels[0]) lookupLabels[0].innerHTML = `${t("registrationNumber")} <b>*</b>`;
  if (lookupLabels[1]) lookupLabels[1].innerHTML = `${t("phone")} <b>*</b>`;
  setText("#lookupError", t("lookupError"));
  setText("#lookupForm .primary-button", t("lookupSubmit"));
  setText("#recoveryToggle", t("recoveryToggle"));
  setText("#recoveryForm > p", t("recoveryHelp"));
  const recoveryLabels = document.querySelectorAll("#recoveryForm .field > span");
  if (recoveryLabels[0]) recoveryLabels[0].innerHTML = `${t("name")} <b>*</b>`;
  if (recoveryLabels[1]) recoveryLabels[1].innerHTML = `${t("phone")} <b>*</b>`;
  if (recoveryLabels[2]) recoveryLabels[2].innerHTML = `${t("email")} <b>*</b>`;
  setText("#recoveryError", t("recoveryError"));
  setText("#recoveryForm .outline-button", t("recoverySubmit"));
  setText("#purchaseResult .section-heading h2", t("purchaseTitle"));
  setText("#creditCard small", t("creditUse"));
  setText("#serviceForm legend", t("asLegend"));
  const serviceLabels = document.querySelectorAll("#serviceForm .field > span");
  if (serviceLabels[0]) serviceLabels[0].innerHTML = `${t("inquiry")} <b>*</b>`;
  setText(".upload-box:nth-child(1) strong", t("overallPhoto"));
  setHtml(".upload-box:nth-child(1) span", `${t("overallPhotoHelp")} <b>${t("photoRequired")}</b>`);
  setText(".upload-box:nth-child(2) strong", t("issuePhoto"));
  setHtml(".upload-box:nth-child(2) span", `${t("issuePhotoHelp")} <b>${t("photoRequired")}</b>`);
  setText(".upload-help", t("uploadHelp"));
  setText("#serviceForm .primary-button", t("asSubmit"));

  setText(".admin-login h1", t("adminLoginTitle"));
  setText(".admin-login > p:not(.eyebrow)", t("adminLoginCopy"));
  const adminPasswordLabel = document.querySelector("#adminLoginForm .field > span");
  if (adminPasswordLabel) adminPasswordLabel.innerHTML = `${t("adminPassword")} <b>*</b>`;
  setText("#adminLoginError", t("adminLoginError"));
  setText("#adminLoginForm .primary-button", t("adminLoginSubmit"));
  setText(".admin-heading h1", t("adminHeading"));
  setText(".admin-heading > div > p:last-child", t("adminCopy"));
  setText("#adminAddCustomer", t("addCustomer"));
  setText("#csvDownload", t("csv"));
  setText("#adminLogout", t("logout"));
  setPlaceholder("#adminSearch", t("searchPlaceholder"));
  const tableHeaders =
    currentLanguage === "ko"
      ? ["등록번호", "고객", "제품 정보", "구매일 / 구매처", "후기", "보유 크레딧", "A/S 상태", ""]
      : [
          "Registration No.",
          "Customer",
          "Product",
          "Purchase / Channel",
          "Review",
          "Credits",
          "A/S Status",
          "",
        ];
  document.querySelectorAll("thead th").forEach((th, index) => {
    th.textContent = tableHeaders[index] || "";
  });

  setText(".success-card h1", t("successTitle"));
  setHtml(".success-copy", t("successCopy"));
  setText("#copyNumber", t("copyNumber"));
  const successLabels = document.querySelectorAll(".success-info span");
  if (successLabels[0]) successLabels[0].textContent = t("successProduct");
  if (successLabels[1]) successLabels[1].textContent = t("successColor");
  if (successLabels[2]) successLabels[2].textContent = t("successDate");
  setHtml(".success-note", `<strong>${t("successNoteTitle")}</strong>${t("successNote")}`);
  setText("#registerAnother", t("registerAnother"));
  setText("#goToService", t("goToService"));

  setText("#privacyDialog h2", t("privacyTitle"));
  setText("#privacyDialog > p:last-of-type", t("privacyCopy"));
  setText("#privacyConfirm", t("confirm"));
  setText("#creditDialog h2", t("creditTitle"));
  setText("#creditDialog > p:last-of-type", t("creditCopy"));
  setText("#creditConfirm", t("confirm"));

  setPlaceholder('#registrationForm [name="name"]', currentLanguage === "ko" ? "이름을 입력해주세요" : "Enter your name");
  setPlaceholder('#registrationForm [name="address"]', currentLanguage === "ko" ? "주소를 입력해주세요" : "Enter your address");
  setPlaceholder('#registrationForm [name="dogName"]', currentLanguage === "ko" ? "반려동물 이름을 입력해주세요" : "Enter your pet name");
  setPlaceholder('#registrationForm [name="referralName"]', currentLanguage === "ko" ? "추천인 또는 추천 반려동물 이름" : "Referrer or pet name");
  setPlaceholder('#registrationForm [name="storeDetail"]', currentLanguage === "ko" ? "구매한 펫페어명 또는 장소를 입력해주세요" : "Enter the pet fair or purchase location");
  setPlaceholder('#serviceForm [name="inquiry"]', currentLanguage === "ko" ? "제품의 상태와 문제를 자세히 적어주세요" : "Please describe the product condition and issue in detail");

  if (!elements.product.value) {
    elements.product.options[0].textContent = t("selectProduct");
  }
  updateVersionOptions();
  updateMaterialNote();
  if (activeServiceCustomerId) handleLookup(new Event("submit"));
  if (isAdminAuthenticated()) renderAdmin();
}

let customers = loadCustomers();
let activeServiceCustomerId = null;
let activeAdminCustomerId = null;
let activeCreditCustomerId = null;
let activeCustomerEditId = null;
let activeCustomerDetailId = null;
let activePhotoUrls = [];

function loadCustomers() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    return saved.map((customer) => ({
      ...customer,
      asStatus:
        {
          "회수 예정": "회수예정",
          "회수 중": "회수중",
          "처리 중": "처리중",
          "처리 후 발송 중": "처리후발송중",
          "처리 완료": "처리완료",
        }[customer.asStatus] || customer.asStatus,
      product:
        {
          "GETZ MINI": "Gatz Mini",
          "GETZ UP": "Gatz U.P",
          "GETZ TWIN": "Gatz Twin",
        }[customer.product] || customer.product,
      version: customer.version || "모름",
      dogName: customer.dogName || "",
      credits: customer.credits || [],
      inquiries: (customer.inquiries || []).map((inquiry) => ({
        consultation: "",
        completedAt: "",
        ...inquiry,
      })),
    }));
  } catch {
    return [];
  }
}

function saveCustomers() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(customers));
}

function createSheetPayload(eventType, customer, extra = {}) {
  return {
    eventType,
    sentAt: new Date().toISOString(),
    registrationNumber: customer.registrationNumber,
    name: customer.name,
    phone: customer.phone,
    address: customer.address,
    petName: customer.dogName || "",
    email: customer.email,
    product: productNames[customer.product] || customer.product,
    productValue: customer.product,
    version: customer.version || "모름",
    color: customer.color,
    colorCode: customer.colorCode,
    secondColor: customer.secondColor || "",
    secondColorCode: customer.secondColorCode || "",
    purchaseDate: customer.purchaseDate,
    store: customer.store,
    storeDetail: customer.storeDetail || "",
    referralName: customer.referralName || "",
    referralPhoneLast4: customer.referralPhoneLast4 || "",
    referredByRegistrationNumber: customer.referredByRegistrationNumber || "",
    reviewUrl: customer.reviewUrl || "",
    creditTotal: getCreditTotal(customer),
    creditHistory: (customer.credits || [])
      .map((credit) => `${credit.amount}P ${credit.reason || ""}`.trim())
      .join(" | "),
    asStatus: customer.asStatus,
    createdAt: customer.createdAt,
    ...extra,
  };
}

function sendSheetEvent(eventType, customer, extra = {}) {
  if (!GOOGLE_SHEETS_WEB_APP_URL) return;
  const payload = createSheetPayload(eventType, customer, extra);
  fetch(GOOGLE_SHEETS_WEB_APP_URL, {
    method: "POST",
    mode: "no-cors",
    keepalive: true,
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(payload),
  }).catch((error) => {
    console.warn("Google Sheets sync failed", error);
  });
}

function openPhotoDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("ruruMimiServicePhotos", 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains("photos")) {
        request.result.createObjectStore("photos", { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function saveServicePhotos(inquiryId, overallPhoto, issuePhotos) {
  const database = await openPhotoDatabase();
  const files = [
    { file: overallPhoto, kind: "overall" },
    ...Array.from(issuePhotos, (file) => ({ file, kind: "issue" })),
  ];

  await new Promise((resolve, reject) => {
    const transaction = database.transaction("photos", "readwrite");
    const store = transaction.objectStore("photos");
    files.forEach(({ file, kind }, index) => {
      store.put({
        id: `${inquiryId}-${index}`,
        inquiryId,
        kind,
        name: file.name,
        type: file.type,
        blob: file,
      });
    });
    transaction.oncomplete = resolve;
    transaction.onerror = () => reject(transaction.error);
  });
  database.close();
}

async function getServicePhotos(inquiryId) {
  const database = await openPhotoDatabase();
  const photos = await new Promise((resolve, reject) => {
    const transaction = database.transaction("photos", "readonly");
    const request = transaction.objectStore("photos").getAll();
    request.onsuccess = () =>
      resolve(request.result.filter((photo) => photo.inquiryId === inquiryId));
    request.onerror = () => reject(request.error);
  });
  database.close();
  return photos;
}

function showView(viewName) {
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
  document.querySelectorAll(".nav-link").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewName);
  });

  const target = document.querySelector(
    viewName === "admin"
      ? "#adminView"
      : viewName === "service"
        ? "#serviceView"
      : viewName === "success"
        ? "#successView"
        : "#registerView",
  );
  target.classList.add("active");

  if (viewName === "admin") {
    updateAdminAccess();
    if (isAdminAuthenticated()) renderAdmin();
  }
  if (viewName === "service") resetServiceLookup();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function formatPhone(value) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length < 4) return digits;
  if (digits.length < 8) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  return `${digits.slice(0, 3)}-${digits.slice(3, 7)}-${digits.slice(7)}`;
}

function formatDate(value) {
  if (!value) return "-";
  const [year, month, day] = value.split("-");
  return `${year}.${month}.${day}`;
}

function formatDateTime(value) {
  if (!value) return "아직 없음";
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function formatStore(customer) {
  return [customer.store, customer.storeDetail].filter(Boolean).join(" · ");
}

function formatPoints(points) {
  const value = Number(points || 0);
  const sign = value < 0 ? "-" : "";
  return `${sign}${Math.abs(value).toLocaleString(currentLanguage === "en" ? "en-US" : "ko-KR")} P`;
}

function getCreditTotal(customer) {
  return (customer.credits || []).reduce((sum, credit) => sum + Number(credit.amount || 0), 0);
}

function getPhoneLast4(phone) {
  return String(phone || "").replace(/\D/g, "").slice(-4);
}

function findReferrer(referralName, referralPhoneLast4) {
  const name = String(referralName || "").trim().toLowerCase();
  const last4 = String(referralPhoneLast4 || "").replace(/\D/g, "");
  if (!name || last4.length !== 4) return null;
  return customers.find((customer) => {
    const names = [customer.name, customer.dogName].filter(Boolean).map((value) =>
      String(value).trim().toLowerCase(),
    );
    return names.includes(name) && getPhoneLast4(customer.phone) === last4;
  });
}

function createCredit(amount, reason, relatedRegistrationNumber = "") {
  return {
    id: crypto.randomUUID(),
    amount,
    reason,
    relatedRegistrationNumber,
    createdAt: new Date().toISOString(),
  };
}

function hasCreditReason(customer, reason) {
  return Boolean(customer?.credits?.some((credit) => credit.reason === reason));
}

function isAdminAuthenticated() {
  return sessionStorage.getItem(ADMIN_SESSION_KEY) === "true";
}

function updateAdminAccess() {
  const authenticated = isAdminAuthenticated();
  elements.adminLogin.classList.toggle("hidden", authenticated);
  elements.adminContent.classList.toggle("hidden", !authenticated);
  if (!authenticated) {
    elements.tableBody.innerHTML = "";
    elements.adminLoginForm.elements.password.focus();
  }
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function generateRegistrationNumber(product, colorCode, purchaseDate) {
  const productCode = productCodes[product];
  const [year, month] = purchaseDate.split("-");
  const yymm = `${year.slice(-2)}${month}`;
  const prefix = `LMM-${productCode}-${colorCode}-${yymm}`;
  const existingNumbers = customers
    .filter((customer) => customer.registrationNumber.startsWith(prefix))
    .map((customer) => Number(customer.registrationNumber.split("-").at(-1)))
    .filter(Number.isFinite);
  const nextSequence = Math.max(0, ...existingNumbers) + 1;
  return `${prefix}-${String(nextSequence).padStart(4, "0")}`;
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => elements.toast.classList.remove("show"), 2200);
}

function updateVersionOptions() {
  const product = elements.product.value;
  const previousVersion = elements.version.value;
  const previousColor = elements.color.value;
  const previousSecondColor = elements.secondColor.value;
  const versions = productOptions[product]?.versions || [];
  elements.version.innerHTML = versions.length
    ? `<option value="">${t("selectVersion")}</option>${versions
        .map((version) => `<option value="${version}">${versionLabel(version)}</option>`)
        .join("")}`
    : `<option value="">${t("selectProductFirst")}</option>`;
  elements.version.disabled = !versions.length;
  resetColorFields();
  if (versions.includes(previousVersion)) {
    elements.version.value = previousVersion;
    updateColorOptions();
    elements.color.value = previousColor;
    elements.secondColor.value = previousSecondColor;
    updateMaterialNote();
    return;
  }
  if (versions.length === 1) {
    elements.version.value = versions[0];
    updateColorOptions();
  }
}

function resetColorFields() {
  elements.color.innerHTML = `<option value="">${t("selectVersionFirst")}</option>`;
  elements.secondColor.innerHTML = `<option value="">${t("selectSecondColor")}</option>`;
  elements.color.disabled = true;
  elements.secondColor.disabled = true;
  elements.secondColor.required = false;
  elements.secondColorField.classList.add("hidden");
  elements.materialNote.classList.add("hidden");
}

function updateColorOptions() {
  const product = elements.product.value;
  const version = elements.version.value;
  const config = productOptions[product];
  const options = config?.colors[version] || [];
  const colorMarkup = options
    .map(
      ({ name, code, oeko }) =>
        `<option value="${code}" data-name="${name}" data-oeko="${oeko}">${name}</option>`,
    )
    .join("");

  elements.color.innerHTML = options.length
    ? `<option value="">${t("selectColor")}</option>${colorMarkup}`
    : `<option value="">${t("selectVersionFirst")}</option>`;
  elements.color.disabled = !options.length;

  const chooseTwo = Boolean(config?.chooseTwo);
  elements.secondColorField.classList.toggle("hidden", !chooseTwo);
  elements.secondColor.required = chooseTwo;
  elements.secondColor.disabled = !chooseTwo;
  elements.secondColor.innerHTML = chooseTwo
    ? `<option value="">${t("selectSecondColor")}</option>${colorMarkup}`
    : `<option value="">${t("selectSecondColor")}</option>`;
  updateMaterialNote();
}

function populateVersionSelect(productSelect, versionSelect, colorSelect, secondColorSelect, secondColorField) {
  const product = productSelect.value;
  const versions = productOptions[product]?.versions || [];
  versionSelect.innerHTML = versions.length
    ? `<option value="">${t("selectVersion")}</option>${versions
        .map((version) => `<option value="${version}">${versionLabel(version)}</option>`)
        .join("")}`
    : `<option value="">${t("selectProductFirst")}</option>`;
  versionSelect.disabled = !versions.length;
  colorSelect.innerHTML = `<option value="">${t("selectVersionFirst")}</option>`;
  colorSelect.disabled = true;
  secondColorSelect.innerHTML = `<option value="">${t("selectSecondColorShort")}</option>`;
  secondColorSelect.disabled = true;
  secondColorSelect.required = false;
  secondColorField.classList.add("hidden");
  if (versions.length === 1) {
    versionSelect.value = versions[0];
    populateColorSelect(productSelect, versionSelect, colorSelect, secondColorSelect, secondColorField);
  }
}

function populateColorSelect(productSelect, versionSelect, colorSelect, secondColorSelect, secondColorField) {
  const product = productSelect.value;
  const version = versionSelect.value;
  const config = productOptions[product];
  const options = config?.colors[version] || [];
  const colorMarkup = options
    .map(
      ({ name, code, oeko }) =>
        `<option value="${code}" data-name="${name}" data-oeko="${oeko}">${name}</option>`,
    )
    .join("");
  colorSelect.innerHTML = options.length
    ? `<option value="">${t("selectColor")}</option>${colorMarkup}`
    : `<option value="">${t("selectVersionFirst")}</option>`;
  colorSelect.disabled = !options.length;
  const chooseTwo = Boolean(config?.chooseTwo);
  secondColorField.classList.toggle("hidden", !chooseTwo);
  secondColorSelect.required = chooseTwo;
  secondColorSelect.disabled = !chooseTwo;
  secondColorSelect.innerHTML = chooseTwo
    ? `<option value="">${t("selectSecondColorShort")}</option>${colorMarkup}`
    : `<option value="">${t("selectSecondColorShort")}</option>`;
}

function updateMaterialNote() {
  const selected = [elements.color.selectedOptions[0], elements.secondColor.selectedOptions[0]]
    .filter((option) => option?.value)
    .map((option) => ({
      name: option.dataset.name,
      oeko: option.dataset.oeko,
    }));

  if (!selected.length) {
    elements.materialNote.classList.add("hidden");
    return;
  }

  elements.materialNote.innerHTML = selected
    .map(({ name, oeko }) => {
      const material =
        oeko === "true"
          ? t("oeko")
          : oeko === "false"
            ? t("regular")
            : t("unknownMaterial");
      return `${escapeHtml(name)}: ${material}`;
    })
    .join("<br />");
  elements.materialNote.classList.remove("hidden");
}

function handleRegistration(event) {
  event.preventDefault();
  const formData = new FormData(elements.form);
  const selectedColor = elements.color.selectedOptions[0];
  const selectedSecondColor = elements.secondColor.selectedOptions[0];
  const isTwin = formData.get("product") === "Gatz Twin";

  if (isTwin && formData.get("color") === formData.get("secondColor")) {
    elements.secondColor.setCustomValidity(
      currentLanguage === "ko"
        ? "서로 다른 두 가지 색상을 선택해주세요."
        : "Please choose two different colors.",
    );
    elements.secondColor.reportValidity();
    return;
  }

  const product = formData.get("product");
  const colorCode = formData.get("color");
  const purchaseDate = formData.get("purchaseDate");
  const registrationNumber = generateRegistrationNumber(product, colorCode, purchaseDate);
  const referralName = String(formData.get("referralName") || "").trim();
  const referralPhoneLast4 = String(formData.get("referralPhoneLast4") || "").replace(/\D/g, "");
  const referrer = findReferrer(referralName, referralPhoneLast4);
  const hasReferralInfo = Boolean(referralName || referralPhoneLast4);
  const reviewUrl = String(formData.get("reviewUrl") || "").trim();
  const initialCredits = [];
  if (hasReferralInfo) {
    initialCredits.push(
      createCredit(
        REFERRED_CREDIT,
        referrer ? "추천 등록 크레딧" : "추천 등록 크레딧 - 추천 고객 확인 필요",
        referrer?.registrationNumber || "",
      ),
    );
  }
  if (reviewUrl) {
    initialCredits.push(createCredit(REVIEW_CREDIT, "후기 등록 크레딧"));
  }

  const customer = {
    id: crypto.randomUUID(),
    registrationNumber,
    name: String(formData.get("name")).trim(),
    phone: String(formData.get("phone")).trim(),
    address: String(formData.get("address")).trim(),
    dogName: String(formData.get("dogName")).trim(),
    email: String(formData.get("email")).trim(),
    product,
    version: formData.get("version"),
    color: selectedColor.dataset.name,
    colorCode,
    secondColor: isTwin ? selectedSecondColor.dataset.name : "",
    secondColorCode: isTwin ? formData.get("secondColor") : "",
    material: selectedColor.dataset.oeko,
    secondMaterial: isTwin ? selectedSecondColor.dataset.oeko : "",
    purchaseDate,
    store: formData.get("store"),
    storeDetail: String(formData.get("storeDetail") || "").trim(),
    referralName,
    referralPhoneLast4,
    referredByRegistrationNumber: referrer?.registrationNumber || "",
    reviewUrl,
    credits: initialCredits,
    hasAs: false,
    inquiry: "",
    inquiries: [],
    couponIssued: false,
    asStatus: "문의 없음",
    createdAt: new Date().toISOString(),
  };

  if (referrer) {
    customers = customers.map((item) =>
      item.id === referrer.id
        ? {
            ...item,
            credits: [
              ...(item.credits || []),
              createCredit(REFERRER_CREDIT, "추천인 크레딧", registrationNumber),
            ],
          }
        : item,
    );
  }
  customers.unshift(customer);
  saveCustomers();
  sendSheetEvent("registration_created", customer);
  showSuccess(customer);
  elements.form.reset();
  elements.version.innerHTML = `<option value="">${t("selectProductFirst")}</option>`;
  elements.version.disabled = true;
  resetColorFields();
  elements.storeDetailField.classList.add("hidden");
  elements.storeDetail.required = false;
  if (hasReferralInfo) {
    showToast(
      referrer
        ? currentLanguage === "ko"
          ? "추천 크레딧이 지급되었습니다."
          : "Referral credits have been issued."
        : currentLanguage === "ko"
          ? "추천받은 고객 크레딧이 지급되었습니다. 추천인은 관리자 확인이 필요합니다."
          : "The referred customer credit has been issued. Referrer verification is needed.",
    );
  }
}

function showSuccess(customer) {
  document.querySelector("#successNumber").textContent = customer.registrationNumber;
  document.querySelector("#successProduct").textContent = productNames[customer.product];
  document.querySelector("#successColor").textContent = [customer.color, customer.secondColor]
    .filter(Boolean)
    .join(" + ");
  document.querySelector("#successDate").textContent = formatDate(customer.purchaseDate);
  showView("success");
}

function resetServiceLookup() {
  activeServiceCustomerId = null;
  elements.lookupForm.reset();
  elements.serviceForm.reset();
  elements.lookupError.classList.add("hidden");
  elements.recoveryForm.reset();
  elements.recoveryForm.classList.add("hidden");
  elements.recoveryError.classList.add("hidden");
  elements.recoveryResults.classList.add("hidden");
  elements.recoveryResults.innerHTML = "";
  elements.purchaseResult.classList.add("hidden");
  elements.creditCard.classList.add("hidden");
  document.querySelectorAll(".upload-box").forEach((box) => box.classList.remove("has-file"));
  document.querySelectorAll("[data-file-label]").forEach((label) => {
    label.textContent = t("selectPhoto");
  });
}

function findCustomersForRecovery(name, phone, email) {
  const normalizedName = String(name || "").trim().toLowerCase();
  const normalizedPhone = String(phone || "").replace(/\D/g, "");
  const normalizedEmail = String(email || "").trim().toLowerCase();
  if (!normalizedName || !normalizedPhone || !normalizedEmail) return [];

  return customers.filter(
    (customer) =>
      String(customer.name || "").trim().toLowerCase() === normalizedName &&
      String(customer.phone || "").replace(/\D/g, "") === normalizedPhone &&
      String(customer.email || "").trim().toLowerCase() === normalizedEmail,
  );
}

function renderRecoveryResults(matches) {
  elements.recoveryResults.innerHTML = matches
    .map((customer) => {
      const colors = [customer.color, customer.secondColor].filter(Boolean).join(" + ");
      return `<article class="recovery-card">
        <strong>${escapeHtml(customer.registrationNumber)}</strong>
        <span>${escapeHtml(productNames[customer.product] || customer.product)} · ${escapeHtml(
          versionLabel(customer.version || "모름"),
        )} · ${escapeHtml(colors || "-")}</span>
        <span>${currentLanguage === "ko" ? "구매일" : "Purchase Date"} ${formatDate(
          customer.purchaseDate,
        )} · ${escapeHtml(formatStore(customer))}</span>
        <button type="button" data-recovered-id="${customer.id}">${t("useRecoveredNumber")}</button>
      </article>`;
    })
    .join("");
  elements.recoveryResults.classList.remove("hidden");
}

function handleRecovery(event) {
  event.preventDefault();
  const formData = new FormData(elements.recoveryForm);
  const matches = findCustomersForRecovery(
    formData.get("name"),
    formData.get("phone"),
    formData.get("email"),
  );
  elements.recoveryError.classList.toggle("hidden", matches.length > 0);
  elements.recoveryResults.classList.toggle("hidden", matches.length === 0);
  if (!matches.length) {
    elements.recoveryResults.innerHTML = "";
    return;
  }
  renderRecoveryResults(matches);
}

function useRecoveredRegistration(customerId) {
  const customer = customers.find((item) => item.id === customerId);
  if (!customer) return;
  elements.lookupForm.elements.registrationNumber.value = customer.registrationNumber;
  elements.lookupForm.elements.phone.value = customer.phone;
  elements.lookupForm.requestSubmit();
}

function handleLookup(event) {
  event.preventDefault();
  const formData = new FormData(elements.lookupForm);
  const registrationNumber = String(formData.get("registrationNumber")).trim().toUpperCase();
  const phone = String(formData.get("phone")).replace(/\D/g, "");
  const customer = customers.find(
    (item) =>
      item.registrationNumber.toUpperCase() === registrationNumber &&
      item.phone.replace(/\D/g, "") === phone,
  );

  elements.lookupError.classList.toggle("hidden", Boolean(customer));
  elements.purchaseResult.classList.toggle("hidden", !customer);
  if (!customer) return;

  activeServiceCustomerId = customer.id;
  document.querySelector("#lookupSerial").textContent = customer.registrationNumber;
  const colors = [customer.color, customer.secondColor].filter(Boolean).join(" + ");
  const details = [
    [currentLanguage === "ko" ? "제품" : "Product", productNames[customer.product] || customer.product],
    [currentLanguage === "ko" ? "버전" : "Version", versionLabel(customer.version || "모름")],
    [currentLanguage === "ko" ? "색상" : "Color", colors],
    [currentLanguage === "ko" ? "반려동물 이름" : "Pet Name", customer.dogName || "-"],
    [currentLanguage === "ko" ? "구매 날짜" : "Purchase Date", formatDate(customer.purchaseDate)],
    [currentLanguage === "ko" ? "구매처" : "Purchase Channel", formatStore(customer)],
    [currentLanguage === "ko" ? "A/S 상태" : "A/S Status", statusLabel(customer.asStatus)],
  ];
  const latestInquiry = customer.inquiries?.at(-1);
  if (latestInquiry) {
    details.push(
      [currentLanguage === "ko" ? "A/S 신청 날짜" : "A/S Request Date", formatDateTime(latestInquiry.createdAt)],
      [currentLanguage === "ko" ? "A/S 처리 완료 날짜" : "A/S Completion Date", formatDateTime(latestInquiry.completedAt)],
    );
  }
  document.querySelector("#purchaseDetails").innerHTML = details
    .map(
      ([label, value]) =>
        `<div class="purchase-item"><span>${label}</span><strong>${escapeHtml(value)}</strong></div>`,
    )
    .join("");
  const creditTotal = getCreditTotal(customer);
  elements.creditTotal.textContent = formatPoints(creditTotal);
  elements.creditCard.classList.remove("hidden");
  elements.purchaseResult.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function handleServiceRequest(event) {
  event.preventDefault();
  const customer = customers.find((item) => item.id === activeServiceCustomerId);
  if (!customer) {
    showToast(t("purchaseFirstToast"));
    return;
  }

  const formData = new FormData(elements.serviceForm);
  const overallPhoto = formData.get("overallPhoto");
  const issuePhotos = elements.serviceForm.elements.issuePhotos.files;
  const inquiry = {
    id: crypto.randomUUID(),
    content: String(formData.get("inquiry")).trim(),
    overallPhoto: overallPhoto?.name || "",
    issuePhotos: Array.from(issuePhotos, (file) => file.name),
    consultation: "",
    completedAt: "",
    createdAt: new Date().toISOString(),
  };
  try {
    await saveServicePhotos(inquiry.id, overallPhoto, issuePhotos);
  } catch {
    showToast(t("photoSaveError"));
    return;
  }
  const inquiries = [...(customer.inquiries || []), inquiry];
  customers = customers.map((item) =>
    item.id === customer.id
      ? { ...item, hasAs: true, inquiry: inquiry.content, inquiries, asStatus: "접수" }
      : item,
  );
  saveCustomers();
  const updatedCustomer = customers.find((item) => item.id === customer.id);
  sendSheetEvent("as_request_created", updatedCustomer, {
    inquiry: inquiry.content,
    asRequestDate: inquiry.createdAt,
    overallPhoto: inquiry.overallPhoto,
    issuePhotos: inquiry.issuePhotos.join(" | "),
  });
  elements.serviceForm.reset();
  document.querySelectorAll(".upload-box").forEach((box) => box.classList.remove("has-file"));
  document.querySelectorAll("[data-file-label]").forEach((label) => {
    label.textContent = t("selectPhoto");
  });
  showToast(t("serviceSubmitted"));
  document.querySelector("#purchaseDetails .purchase-item:last-child strong").textContent = statusLabel("접수");
}

function getFilteredCustomers() {
  const query = elements.search.value.trim().toLowerCase();
  const product = elements.productFilter.value;
  const asStatus = elements.asFilter.value;

  return customers.filter((customer) => {
    const searchable = [
      customer.registrationNumber,
      customer.name,
      customer.phone,
      customer.email,
    ]
      .join(" ")
      .toLowerCase();
    return (
      (!query || searchable.includes(query)) &&
      (!product || customer.product === product) &&
      (!asStatus || customer.asStatus === asStatus)
    );
  });
}

function renderStats() {
  const reviewCount = customers.filter((customer) => customer.reviewUrl).length;
  const creditTotal = customers.reduce((sum, customer) => sum + getCreditTotal(customer), 0);
  const openAsCount = customers.filter(
    (customer) => customer.hasAs && customer.asStatus !== "처리완료",
  ).length;
  const stats = [
    [currentLanguage === "ko" ? "전체 등록 고객" : "Total Customers", customers.length],
    [currentLanguage === "ko" ? "후기 등록" : "Reviews", reviewCount],
    [currentLanguage === "ko" ? "총 보유 크레딧" : "Total Credits", formatPoints(creditTotal)],
    [currentLanguage === "ko" ? "진행 중 A/S" : "Open A/S", openAsCount],
  ];
  elements.stats.innerHTML = stats
    .map(
      ([label, value]) =>
        `<div class="stat-card"><span>${label}</span><strong>${value}</strong></div>`,
    )
    .join("");
}

function renderAdmin() {
  renderStats();
  const filtered = getFilteredCustomers();
  elements.tableBody.innerHTML = filtered.map(customerRow).join("");
  elements.emptyState.classList.toggle("hidden", filtered.length > 0);
  elements.tableBody.closest("table").classList.toggle("hidden", filtered.length === 0);
}

function customerRow(customer) {
  const review = customer.reviewUrl
    ? `<a class="review-link" href="${escapeHtml(customer.reviewUrl)}" target="_blank" rel="noopener">${
        currentLanguage === "ko" ? "링크 확인" : "Open link"
      } ↗</a>`
    : `<span class="no-review">${currentLanguage === "ko" ? "미등록" : "None"}</span>`;
  return `
    <tr>
      <td>
        <button class="link-button reg-code" data-action="view-customer" data-id="${
          customer.id
        }">${escapeHtml(customer.registrationNumber)}</button>
      </td>
      <td>
        <button class="link-button customer-name" data-action="view-customer" data-id="${
          customer.id
        }">${escapeHtml(customer.name)}</button>
        <span class="sub-text">${escapeHtml(customer.phone)}</span>
        ${
          customer.dogName
            ? `<span class="sub-text">${currentLanguage === "ko" ? "반려동물" : "Pet"} ${escapeHtml(customer.dogName)}</span>`
            : ""
        }
      </td>
      <td>
        <span class="product-name">${escapeHtml(productNames[customer.product] || customer.product)}</span>
        <span class="sub-text">${currentLanguage === "ko" ? "버전" : "Version"} ${escapeHtml(versionLabel(customer.version || "모름"))} · ${escapeHtml(
          [customer.color, customer.secondColor].filter(Boolean).join(" + "),
        )}</span>
      </td>
      <td>
        <span class="product-name">${formatDate(customer.purchaseDate)}</span>
        <span class="sub-text">${escapeHtml(formatStore(customer))}</span>
      </td>
      <td>${review}</td>
      <td>
        <span class="product-name">${formatPoints(getCreditTotal(customer))}</span>
        <button class="as-detail-button" data-action="issue-credit" data-id="${
          customer.id
        }">${currentLanguage === "ko" ? "크레딧 발행" : "Issue credit"}</button>
      </td>
      <td>
        <span class="product-name">${escapeHtml(statusLabel(customer.asStatus))}</span>
        ${
          customer.inquiries?.length
            ? `<span class="sub-text">${currentLanguage === "ko" ? "사진" : "Photos"} ${
                1 + (customer.inquiries.at(-1).issuePhotos?.length || 0)
              } · ${currentLanguage === "ko" ? "신청" : "Requested"} ${formatDateTime(customer.inquiries.at(-1).createdAt)}</span>
              ${
                customer.inquiries.at(-1).completedAt
                  ? `<span class="sub-text">${currentLanguage === "ko" ? "완료" : "Completed"} ${formatDateTime(
                      customer.inquiries.at(-1).completedAt,
                    )}</span>`
                  : ""
              }
              <button class="as-detail-button" data-action="view-as" data-id="${
                customer.id
              }">${currentLanguage === "ko" ? "상세 확인" : "Details"}</button>`
            : ""
        }
      </td>
      <td>
        <button class="as-detail-button" data-action="edit-customer" data-id="${
          customer.id
        }">${currentLanguage === "ko" ? "수정" : "Edit"}</button>
        <button class="delete-button" data-action="delete" data-id="${
          customer.id
        }" aria-label="${escapeHtml(customer.name)} ${currentLanguage === "ko" ? "고객 삭제" : "delete customer"}">×</button>
      </td>
    </tr>
  `;
}

function updateCustomer(id, changes) {
  customers = customers.map((customer) =>
    customer.id === id ? { ...customer, ...changes } : customer,
  );
  saveCustomers();
  renderAdmin();
}

function handleTableChange(event) {
  event.preventDefault();
}

function openCustomerDetail(customerId) {
  const customer = customers.find((item) => item.id === customerId);
  if (!customer) return;
  activeCustomerDetailId = customerId;
  const colors = [customer.color, customer.secondColor].filter(Boolean).join(" + ");
  const details = [
    [currentLanguage === "ko" ? "등록번호" : "Registration No.", customer.registrationNumber],
    [currentLanguage === "ko" ? "이름" : "Name", customer.name],
    [currentLanguage === "ko" ? "휴대폰 번호" : "Mobile", customer.phone],
    [currentLanguage === "ko" ? "주소" : "Address", customer.address || "-"],
    [currentLanguage === "ko" ? "반려동물 이름" : "Pet Name", customer.dogName || "-"],
    [currentLanguage === "ko" ? "이메일" : "Email", customer.email || "-"],
    [currentLanguage === "ko" ? "구매 제품" : "Product", productNames[customer.product] || customer.product],
    [currentLanguage === "ko" ? "제품 버전" : "Version", versionLabel(customer.version || "모름")],
    [currentLanguage === "ko" ? "색상" : "Color", colors || "-"],
    [currentLanguage === "ko" ? "구매 날짜" : "Purchase Date", formatDate(customer.purchaseDate)],
    [currentLanguage === "ko" ? "구매처" : "Purchase Channel", formatStore(customer) || "-"],
    [currentLanguage === "ko" ? "후기 링크" : "Review Link", customer.reviewUrl || "-"],
    [currentLanguage === "ko" ? "추천 정보" : "Referral", customer.referralName || "-"],
    [currentLanguage === "ko" ? "추천 전화 뒷자리" : "Referrer Phone Last 4", customer.referralPhoneLast4 || "-"],
    [currentLanguage === "ko" ? "보유 크레딧" : "Credits", formatPoints(getCreditTotal(customer))],
    [currentLanguage === "ko" ? "A/S 상태" : "A/S Status", statusLabel(customer.asStatus || "문의 없음")],
  ];
  elements.customerDetailGrid.innerHTML = details
    .map(
      ([label, value]) =>
        `<div class="as-meta-item"><span>${label}</span><strong>${escapeHtml(value)}</strong></div>`,
    )
    .join("");
  elements.customerCreditHistory.innerHTML = customer.credits?.length
    ? customer.credits
        .map(
          (credit) =>
            `<div class="credit-history-item">
              <strong>${formatPoints(credit.amount)}</strong>
              <span>${escapeHtml(reasonLabel(credit.reason))} · ${formatDateTime(
                credit.createdAt,
              )}</span>
            </div>`,
        )
        .join("")
    : `<p class="as-photo-empty">${
        currentLanguage === "ko" ? "아직 발행된 크레딧이 없습니다." : "No credits have been issued yet."
      }</p>`;
  elements.customerDetailDialog.showModal();
}

function setAdminStoreDetailVisibility() {
  const needsDetail = elements.adminStore.value === "기타(펫페어)";
  elements.adminStoreDetailField.classList.toggle("hidden", !needsDetail);
  elements.adminCustomerForm.elements.storeDetail.required = needsDetail;
  if (!needsDetail) elements.adminCustomerForm.elements.storeDetail.value = "";
}

function resetAdminProductFields() {
  elements.adminVersion.innerHTML = `<option value="">${t("selectProductFirst")}</option>`;
  elements.adminVersion.disabled = true;
  elements.adminColor.innerHTML = `<option value="">${t("selectVersionFirst")}</option>`;
  elements.adminColor.disabled = true;
  elements.adminSecondColor.innerHTML = `<option value="">${t("selectSecondColorShort")}</option>`;
  elements.adminSecondColor.disabled = true;
  elements.adminSecondColor.required = false;
  elements.adminSecondColorField.classList.add("hidden");
}

function openAdminCustomerDialog(customerId = null) {
  const customer = customerId ? customers.find((item) => item.id === customerId) : null;
  activeCustomerEditId = customer?.id || null;
  elements.adminCustomerTitle.textContent = customer
    ? currentLanguage === "ko"
      ? "고객 정보 수정"
      : "Edit Customer"
    : currentLanguage === "ko"
      ? "고객 등록"
      : "Add Customer";
  elements.adminCustomerForm.reset();
  elements.adminCustomerForm.elements.creditTotal.value = 0;
  resetAdminProductFields();
  elements.adminStoreDetailField.classList.add("hidden");
  elements.adminCustomerForm.elements.storeDetail.required = false;

  if (customer) {
    const form = elements.adminCustomerForm.elements;
    form.name.value = customer.name || "";
    form.phone.value = customer.phone || "";
    form.address.value = customer.address || "";
    form.dogName.value = customer.dogName || "";
    form.email.value = customer.email || "";
    form.product.value = customer.product || "";
    populateVersionSelect(
      elements.adminProduct,
      elements.adminVersion,
      elements.adminColor,
      elements.adminSecondColor,
      elements.adminSecondColorField,
    );
    form.version.value = customer.version || "";
    populateColorSelect(
      elements.adminProduct,
      elements.adminVersion,
      elements.adminColor,
      elements.adminSecondColor,
      elements.adminSecondColorField,
    );
    form.color.value = customer.colorCode || "";
    form.secondColor.value = customer.secondColorCode || "";
    form.purchaseDate.value = customer.purchaseDate || "";
    form.store.value = customer.store || "";
    setAdminStoreDetailVisibility();
    form.storeDetail.value = customer.storeDetail || "";
    form.reviewUrl.value = customer.reviewUrl || "";
    form.referralName.value = customer.referralName || "";
    form.referralPhoneLast4.value = customer.referralPhoneLast4 || "";
    form.asStatus.value = customer.asStatus || "문의 없음";
    form.creditTotal.value = getCreditTotal(customer);
  }

  elements.adminCustomerDialog.showModal();
}

function buildCustomerFromAdminForm(existingCustomer = null) {
  const form = elements.adminCustomerForm.elements;
  const product = form.product.value;
  const selectedColor = elements.adminColor.selectedOptions[0];
  const selectedSecondColor = elements.adminSecondColor.selectedOptions[0];
  const isTwin = product === "Gatz Twin";
  if (isTwin && form.color.value === form.secondColor.value) {
    elements.adminSecondColor.setCustomValidity(
      currentLanguage === "ko"
        ? "서로 다른 두 가지 색상을 선택해주세요."
        : "Please choose two different colors.",
    );
    elements.adminSecondColor.reportValidity();
    return null;
  }
  elements.adminSecondColor.setCustomValidity("");

  const reviewUrl = form.reviewUrl.value.trim();
  const baseCredits = existingCustomer?.credits || [];
  const requestedCreditTotal = Number(form.creditTotal.value || 0);
  if (!Number.isFinite(requestedCreditTotal) || requestedCreditTotal < 0) {
    form.creditTotal.reportValidity();
    return null;
  }
  const currentCreditTotal = existingCustomer ? getCreditTotal(existingCustomer) : 0;
  const shouldIssueReviewCredit =
    Boolean(reviewUrl) &&
    !hasCreditReason(existingCustomer, "후기 등록 크레딧") &&
    !existingCustomer?.reviewUrl;
  const credits = shouldIssueReviewCredit
    ? [...baseCredits, createCredit(REVIEW_CREDIT, "후기 등록 크레딧")]
    : [...baseCredits];
  const baselineCreditTotal =
    shouldIssueReviewCredit && requestedCreditTotal === currentCreditTotal
      ? currentCreditTotal
      : currentCreditTotal + (shouldIssueReviewCredit ? REVIEW_CREDIT : 0);
  const creditAdjustment = requestedCreditTotal - baselineCreditTotal;
  if (creditAdjustment !== 0) {
    credits.push(
      createCredit(
        creditAdjustment,
        creditAdjustment > 0 ? "관리자 크레딧 추가 조정" : "관리자 크레딧 차감 조정",
      ),
    );
  }

  return {
    ...(existingCustomer || {}),
    id: existingCustomer?.id || crypto.randomUUID(),
    registrationNumber:
      existingCustomer?.registrationNumber ||
      generateRegistrationNumber(product, form.color.value, form.purchaseDate.value),
    name: form.name.value.trim(),
    phone: formatPhone(form.phone.value),
    address: form.address.value.trim(),
    dogName: form.dogName.value.trim(),
    email: form.email.value.trim(),
    product,
    version: form.version.value,
    color: selectedColor?.dataset.name || existingCustomer?.color || "",
    colorCode: form.color.value,
    secondColor: isTwin ? selectedSecondColor?.dataset.name || "" : "",
    secondColorCode: isTwin ? form.secondColor.value : "",
    material: selectedColor?.dataset.oeko || "",
    secondMaterial: isTwin ? selectedSecondColor?.dataset.oeko || "" : "",
    purchaseDate: form.purchaseDate.value,
    store: form.store.value,
    storeDetail: form.storeDetail.value.trim(),
    referralName: form.referralName.value.trim(),
    referralPhoneLast4: form.referralPhoneLast4.value.replace(/\D/g, ""),
    referredByRegistrationNumber: existingCustomer?.referredByRegistrationNumber || "",
    reviewUrl,
    couponIssued: Boolean(existingCustomer?.couponIssued),
    asStatus: form.asStatus.value,
    hasAs: form.asStatus.value !== "문의 없음" || Boolean(existingCustomer?.hasAs),
    inquiry: existingCustomer?.inquiry || "",
    inquiries: existingCustomer?.inquiries || [],
    credits,
    createdAt: existingCustomer?.createdAt || new Date().toISOString(),
  };
}

function saveAdminCustomer(event) {
  event.preventDefault();
  const existingCustomer = activeCustomerEditId
    ? customers.find((item) => item.id === activeCustomerEditId)
    : null;
  const customer = buildCustomerFromAdminForm(existingCustomer);
  if (!customer) return;
  customers = existingCustomer
    ? customers.map((item) => (item.id === existingCustomer.id ? customer : item))
    : [customer, ...customers];
  saveCustomers();
  sendSheetEvent(existingCustomer ? "admin_customer_updated" : "admin_customer_created", customer);
  renderAdmin();
  elements.adminCustomerDialog.close();
  showToast(
    existingCustomer
      ? currentLanguage === "ko"
        ? "고객 정보를 수정했습니다."
        : "Customer information has been updated."
      : currentLanguage === "ko"
        ? "고객 정보를 등록했습니다."
        : "Customer has been added.",
  );
}

function openCreditIssue(customerId) {
  const customer = customers.find((item) => item.id === customerId);
  if (!customer) return;
  activeCreditCustomerId = customerId;
  elements.creditIssueTarget.textContent = `${customer.name} · ${
    customer.dogName || (currentLanguage === "ko" ? "반려동물 이름 없음" : "No pet name")
  } · ${currentLanguage === "ko" ? "현재" : "Current"} ${formatPoints(getCreditTotal(customer))}`;
  elements.creditIssueForm.reset();
  elements.creditIssueDialog.showModal();
}

function saveCreditIssue(event) {
  event.preventDefault();
  const customer = customers.find((item) => item.id === activeCreditCustomerId);
  if (!customer) return;
  const formData = new FormData(elements.creditIssueForm);
  const amount = Number(formData.get("amount"));
  if (!Number.isFinite(amount) || amount <= 0) {
    elements.creditIssueForm.elements.amount.reportValidity();
    return;
  }
  const reason = String(formData.get("reason") || "").trim() || "관리자 수동 발행";
  customers = customers.map((item) =>
    item.id === customer.id
      ? {
          ...item,
          credits: [...(item.credits || []), createCredit(amount, reason)],
        }
      : item,
  );
  saveCustomers();
  const updatedCustomer = customers.find((item) => item.id === customer.id);
  sendSheetEvent("credit_issued", updatedCustomer, {
    issuedCredit: amount,
    creditReason: reason,
  });
  renderAdmin();
  elements.creditIssueDialog.close();
  showToast(
    currentLanguage === "ko"
      ? `${formatPoints(amount)} 크레딧을 발행했습니다.`
      : `${formatPoints(amount)} credits have been issued.`,
  );
}

async function openAsDetail(customerId) {
  const customer = customers.find((item) => item.id === customerId);
  const inquiry = customer?.inquiries?.at(-1);
  if (!customer || !inquiry) return;

  activeAdminCustomerId = customerId;
  const meta = [
    [currentLanguage === "ko" ? "고객" : "Customer", `${customer.name} · ${customer.phone}`],
    [currentLanguage === "ko" ? "시리얼 번호" : "Serial Number", customer.registrationNumber],
    [currentLanguage === "ko" ? "제품" : "Product", productNames[customer.product] || customer.product],
    [currentLanguage === "ko" ? "진행 상황" : "Status", statusLabel(customer.asStatus)],
    [currentLanguage === "ko" ? "신청 날짜" : "Request Date", formatDateTime(inquiry.createdAt)],
    [currentLanguage === "ko" ? "처리 완료 날짜" : "Completion Date", formatDateTime(inquiry.completedAt)],
    [currentLanguage === "ko" ? "구매 날짜" : "Purchase Date", formatDate(customer.purchaseDate)],
    [currentLanguage === "ko" ? "구매처" : "Purchase Channel", formatStore(customer)],
  ];
  document.querySelector("#asMeta").innerHTML = meta
    .map(
      ([label, value]) =>
        `<div class="as-meta-item"><span>${label}</span><strong>${escapeHtml(value)}</strong></div>`,
    )
    .join("");
  document.querySelector("#asInquiryContent").textContent = inquiry.content;
  elements.asManagementForm.elements.consultation.value = inquiry.consultation || "";
  elements.asManagementForm.elements.status.value = customer.asStatus;

  activePhotoUrls.forEach(URL.revokeObjectURL);
  activePhotoUrls = [];
  const gallery = document.querySelector("#asPhotoGallery");
  gallery.innerHTML = `<p class="as-photo-empty">${
    currentLanguage === "ko" ? "사진을 불러오는 중입니다." : "Loading photos."
  }</p>`;
  elements.serviceDetailDialog.showModal();

  try {
    const photos = await getServicePhotos(inquiry.id);
    gallery.innerHTML = photos.length
      ? photos
          .map((photo) => {
            const url = URL.createObjectURL(photo.blob);
            activePhotoUrls.push(url);
            const label =
              photo.kind === "overall"
                ? currentLanguage === "ko"
                  ? "제품 전체"
                  : "Full product"
                : currentLanguage === "ko"
                  ? "문제 부분"
                  : "Issue area";
            return `<figure class="as-photo-item">
              <a href="${url}" target="_blank" title="${
                currentLanguage === "ko" ? "원본 사진 열기" : "Open original photo"
              }">
                <img src="${url}" alt="${escapeHtml(label)} ${currentLanguage === "ko" ? "사진" : "photo"}" />
              </a>
              <figcaption>${escapeHtml(label)} · ${escapeHtml(photo.name)}</figcaption>
            </figure>`;
          })
          .join("")
      : `<p class="as-photo-empty">${
          currentLanguage === "ko" ? "저장된 사진을 찾을 수 없습니다." : "No saved photos found."
        }</p>`;
  } catch {
    gallery.innerHTML = `<p class="as-photo-empty">${
      currentLanguage === "ko" ? "사진을 불러오지 못했습니다." : "Could not load photos."
    }</p>`;
  }
}

function saveAsManagement(event) {
  event.preventDefault();
  const customer = customers.find((item) => item.id === activeAdminCustomerId);
  const inquiry = customer?.inquiries?.at(-1);
  if (!customer || !inquiry) return;

  const formData = new FormData(elements.asManagementForm);
  const status = formData.get("status");
  const completedAt =
    status === "처리완료" ? inquiry.completedAt || new Date().toISOString() : "";
  const updatedInquiry = {
    ...inquiry,
    consultation: String(formData.get("consultation") || "").trim(),
    completedAt,
    updatedAt: new Date().toISOString(),
  };
  const inquiries = [...customer.inquiries.slice(0, -1), updatedInquiry];
  customers = customers.map((item) =>
    item.id === customer.id ? { ...item, asStatus: status, inquiries } : item,
  );
  saveCustomers();
  const updatedCustomer = customers.find((item) => item.id === customer.id);
  sendSheetEvent("as_status_updated", updatedCustomer, {
    inquiry: updatedInquiry.content,
    consultation: updatedInquiry.consultation,
    asStatus: status,
    asRequestDate: updatedInquiry.createdAt,
    asCompletedAt: updatedInquiry.completedAt,
  });
  renderAdmin();
  elements.serviceDetailDialog.close();
  showToast(
    currentLanguage === "ko"
      ? "A/S 처리 내용과 진행 상황을 저장했습니다."
      : "A/S notes and status have been saved.",
  );
}

async function handleTableClick(event) {
  const viewButton = event.target.closest('[data-action="view-customer"]');
  if (viewButton) {
    openCustomerDetail(viewButton.dataset.id);
    return;
  }

  const editButton = event.target.closest('[data-action="edit-customer"]');
  if (editButton) {
    openAdminCustomerDialog(editButton.dataset.id);
    return;
  }

  const creditButton = event.target.closest('[data-action="issue-credit"]');
  if (creditButton) {
    openCreditIssue(creditButton.dataset.id);
    return;
  }

  const asButton = event.target.closest('[data-action="view-as"]');
  if (asButton) {
    await openAsDetail(asButton.dataset.id);
    return;
  }

  const button = event.target.closest('[data-action="delete"]');
  if (!button) return;
  const customer = customers.find((item) => item.id === button.dataset.id);
  if (
    !customer ||
    !window.confirm(
      currentLanguage === "ko"
        ? `${customer.name} 고객의 등록 정보를 삭제할까요?`
        : `Delete ${customer.name}'s registration information?`,
    )
  )
    return;
  customers = customers.filter((item) => item.id !== button.dataset.id);
  saveCustomers();
  renderAdmin();
  showToast(
    currentLanguage === "ko"
      ? "고객 등록 정보를 삭제했습니다."
      : "Customer registration has been deleted.",
  );
}

function csvCell(value) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

function downloadCsv() {
  if (!customers.length) {
    showToast(
      currentLanguage === "ko"
        ? "다운로드할 고객 정보가 없습니다."
        : "There is no customer information to download.",
    );
    return;
  }
  const headers = [
    "등록번호",
    "이름",
    "휴대폰 번호",
    "주소",
    "반려동물 이름",
    "이메일",
    "구매 제품",
    "제품 버전",
    "색상",
    "두 번째 색상",
    "구매 날짜",
    "구매처",
    "추천인/추천 반려동물",
    "추천인 전화번호 뒷자리",
    "추천 매칭 등록번호",
    "유니버스 클럽 크레딧",
    "후기 링크",
    "A/S 상태",
    "문의 내용",
    "처리 방식 / 상담 내용",
    "A/S 신청 날짜",
    "A/S 처리 완료 날짜",
    "전체 사진",
    "문제 부분 사진",
    "등록일",
  ];
  const rows = customers.map((customer) => [
    customer.registrationNumber,
    customer.name,
    customer.phone,
    customer.address,
    customer.dogName || "",
    customer.email,
    productNames[customer.product] || customer.product,
    customer.version || "모름",
    customer.color,
    customer.secondColor || "",
    customer.purchaseDate,
    formatStore(customer),
    customer.referralName || "",
    customer.referralPhoneLast4 || "",
    customer.referredByRegistrationNumber || "",
    getCreditTotal(customer),
    customer.reviewUrl,
    customer.asStatus,
    customer.inquiry,
    customer.inquiries?.at(-1)?.consultation || "",
    customer.inquiries?.at(-1)?.createdAt || "",
    customer.inquiries?.at(-1)?.completedAt || "",
    customer.inquiries?.at(-1)?.overallPhoto || "",
    customer.inquiries?.at(-1)?.issuePhotos?.join(" | ") || "",
    customer.createdAt,
  ]);
  const csv = "\uFEFF" + [headers, ...rows].map((row) => row.map(csvCell).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `ruru-mimi-customers-${new Date().toISOString().slice(0, 10)}.csv`;
  anchor.click();
  URL.revokeObjectURL(url);
}

document.querySelectorAll(".nav-link").forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.view));
});

elements.adminLoginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const password = elements.adminLoginForm.elements.password.value;
  if (password !== ADMIN_PASSWORD) {
    elements.adminLoginError.classList.remove("hidden");
    elements.adminLoginForm.elements.password.select();
    return;
  }
  sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
  elements.adminLoginError.classList.add("hidden");
  elements.adminLoginForm.reset();
  updateAdminAccess();
  renderAdmin();
});

document.querySelector("#adminLogout").addEventListener("click", () => {
  sessionStorage.removeItem(ADMIN_SESSION_KEY);
  updateAdminAccess();
  showToast(
    currentLanguage === "ko"
      ? "관리자 페이지에서 로그아웃했습니다."
      : "You have logged out of the admin page.",
  );
});
document.querySelector("#adminAddCustomer").addEventListener("click", () => {
  openAdminCustomerDialog();
});

elements.product.addEventListener("change", updateVersionOptions);
elements.store.addEventListener("change", () => {
  const needsDetail = elements.store.value === "기타(펫페어)";
  elements.storeDetailField.classList.toggle("hidden", !needsDetail);
  elements.storeDetail.required = needsDetail;
  if (!needsDetail) elements.storeDetail.value = "";
});
elements.version.addEventListener("change", updateColorOptions);
elements.color.addEventListener("change", () => {
  elements.secondColor.setCustomValidity("");
  updateMaterialNote();
});
elements.secondColor.addEventListener("change", () => {
  elements.secondColor.setCustomValidity("");
  updateMaterialNote();
});
elements.adminProduct.addEventListener("change", () => {
  populateVersionSelect(
    elements.adminProduct,
    elements.adminVersion,
    elements.adminColor,
    elements.adminSecondColor,
    elements.adminSecondColorField,
  );
});
elements.adminVersion.addEventListener("change", () => {
  populateColorSelect(
    elements.adminProduct,
    elements.adminVersion,
    elements.adminColor,
    elements.adminSecondColor,
    elements.adminSecondColorField,
  );
});
elements.adminColor.addEventListener("change", () => {
  elements.adminSecondColor.setCustomValidity("");
});
elements.adminSecondColor.addEventListener("change", () => {
  elements.adminSecondColor.setCustomValidity("");
});
elements.adminStore.addEventListener("change", setAdminStoreDetailVisibility);
elements.form.elements.phone.addEventListener("input", (event) => {
  event.target.value = formatPhone(event.target.value);
});
elements.form.elements.referralPhoneLast4.addEventListener("input", (event) => {
  event.target.value = event.target.value.replace(/\D/g, "").slice(0, 4);
});
elements.lookupForm.elements.phone.addEventListener("input", (event) => {
  event.target.value = formatPhone(event.target.value);
});
elements.recoveryForm.elements.phone.addEventListener("input", (event) => {
  event.target.value = formatPhone(event.target.value);
});
elements.lookupForm.elements.registrationNumber.addEventListener("input", (event) => {
  event.target.value = event.target.value.toUpperCase();
});
elements.adminCustomerForm.elements.phone.addEventListener("input", (event) => {
  event.target.value = formatPhone(event.target.value);
});
elements.adminCustomerForm.elements.referralPhoneLast4.addEventListener("input", (event) => {
  event.target.value = event.target.value.replace(/\D/g, "").slice(0, 4);
});
elements.serviceForm.querySelectorAll('input[type="file"]').forEach((input) => {
  input.addEventListener("change", () => {
    const label = document.querySelector(`[data-file-label="${input.name}"]`);
    const count = input.files.length;
    label.textContent = count ? t("fileCount")(count) : t("selectPhoto");
    input.closest(".upload-box").classList.toggle("has-file", count > 0);
  });
});

elements.form.addEventListener("submit", handleRegistration);
elements.lookupForm.addEventListener("submit", handleLookup);
elements.recoveryToggle.addEventListener("click", () => {
  elements.recoveryForm.classList.toggle("hidden");
  if (!elements.recoveryForm.classList.contains("hidden")) {
    elements.recoveryForm.elements.name.focus();
  }
});
elements.recoveryForm.addEventListener("submit", handleRecovery);
elements.recoveryResults.addEventListener("click", (event) => {
  const button = event.target.closest("[data-recovered-id]");
  if (button) useRecoveredRegistration(button.dataset.recoveredId);
});
elements.serviceForm.addEventListener("submit", handleServiceRequest);
elements.asManagementForm.addEventListener("submit", saveAsManagement);
elements.creditIssueForm.addEventListener("submit", saveCreditIssue);
elements.adminCustomerForm.addEventListener("submit", saveAdminCustomer);
elements.tableBody.addEventListener("change", handleTableChange);
elements.tableBody.addEventListener("click", handleTableClick);
[elements.search, elements.productFilter, elements.asFilter].forEach((element) => {
  element.addEventListener(element.tagName === "INPUT" ? "input" : "change", renderAdmin);
});

document.querySelector("#csvDownload").addEventListener("click", downloadCsv);
document.querySelector("#registerAnother").addEventListener("click", () => showView("register"));
document.querySelector("#goToService").addEventListener("click", () => showView("service"));
document.querySelector("#copyNumber").addEventListener("click", async () => {
  const number = document.querySelector("#successNumber").textContent;
  await navigator.clipboard.writeText(number);
  showToast(t("copied"));
});

document.querySelectorAll(".language-button").forEach((button) => {
  button.addEventListener("click", () => {
    currentLanguage = button.dataset.lang;
    localStorage.setItem(LANGUAGE_KEY, currentLanguage);
    applyLanguage();
  });
});

const privacyDialog = document.querySelector("#privacyDialog");
document.querySelector("#privacyOpen").addEventListener("click", () => privacyDialog.showModal());
document.querySelector("#privacyClose").addEventListener("click", () => privacyDialog.close());
document.querySelector("#privacyConfirm").addEventListener("click", () => privacyDialog.close());
const creditDialog = document.querySelector("#creditDialog");
document.querySelector("#creditCard").addEventListener("click", () => creditDialog.showModal());
document.querySelector("#creditClose").addEventListener("click", () => creditDialog.close());
document.querySelector("#creditConfirm").addEventListener("click", () => creditDialog.close());
document.querySelector("#creditIssueClose").addEventListener("click", () => {
  elements.creditIssueDialog.close();
});
elements.creditIssueDialog.addEventListener("close", () => {
  activeCreditCustomerId = null;
});
document.querySelector("#customerDetailClose").addEventListener("click", () => {
  elements.customerDetailDialog.close();
});
document.querySelector("#customerDetailEdit").addEventListener("click", () => {
  const customerId = activeCustomerDetailId;
  elements.customerDetailDialog.close();
  if (customerId) openAdminCustomerDialog(customerId);
});
elements.customerDetailDialog.addEventListener("close", () => {
  activeCustomerDetailId = null;
});
document.querySelector("#adminCustomerClose").addEventListener("click", () => {
  elements.adminCustomerDialog.close();
});
elements.adminCustomerDialog.addEventListener("close", () => {
  activeCustomerEditId = null;
  elements.adminSecondColor.setCustomValidity("");
});
document.querySelector("#serviceDetailClose").addEventListener("click", () => {
  elements.serviceDetailDialog.close();
});
elements.serviceDetailDialog.addEventListener("close", () => {
  activePhotoUrls.forEach(URL.revokeObjectURL);
  activePhotoUrls = [];
  activeAdminCustomerId = null;
});

const today = new Date();
elements.purchaseDate.max = today.toISOString().slice(0, 10);
document.querySelector("#memberSince").textContent =
  `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, "0")}`;
applyLanguage();
