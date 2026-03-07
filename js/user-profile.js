const STORAGE_KEY = "webcongthucnauan1:user-profile";

function getDefaultProfile() {
  return {
    fullName: "Tên người dùng",
    email: "email@example.com",
    bio: "Chưa có mô tả. Hãy cập nhật ở form bên phải.",
    favoriteCuisines: ["Phở", "Bún chả", "Bánh flan"],
  };
}

function loadProfile() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultProfile();
    const parsed = JSON.parse(raw);
    return { ...getDefaultProfile(), ...parsed };
  } catch (e) {
    console.error("Không thể đọc dữ liệu hồ sơ:", e);
    return getDefaultProfile();
  }
}

function saveProfile(profile) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch (e) {
    console.error("Không thể lưu dữ liệu hồ sơ:", e);
  }
}

function renderProfile(profile) {
  const nameEl = document.getElementById("profileName");
  const emailEl = document.getElementById("profileEmail");
  const bioEl = document.getElementById("profileBio");
  const favoritesEl = document.getElementById("profileFavorites");

  if (!nameEl || !emailEl || !bioEl || !favoritesEl) return;

  nameEl.textContent = profile.fullName || "Tên người dùng";
  emailEl.textContent = profile.email || "email@example.com";
  bioEl.textContent =
    profile.bio ||
    "Chưa có mô tả. Hãy cập nhật ở form bên phải để giới thiệu về bạn.";

  favoritesEl.innerHTML = "";
  const cuisines = profile.favoriteCuisines || [];
  cuisines.forEach((item) => {
    const trimmed = (item || "").trim();
    if (!trimmed) return;
    const li = document.createElement("li");
    li.textContent = trimmed;
    favoritesEl.appendChild(li);
  });
}

function fillForm(profile) {
  const form = document.getElementById("profileForm");
  if (!form) return;

  form.fullName.value = profile.fullName || "";
  form.email.value = profile.email || "";
  form.bio.value = profile.bio || "";
  form.favoriteCuisines.value = (profile.favoriteCuisines || []).join(", ");
}

function showMessage(text, type = "success") {
  const msgEl = document.getElementById("formMessage");
  if (!msgEl) return;
  msgEl.textContent = text;
  msgEl.classList.remove("success", "error");
  msgEl.classList.add(type);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("profileForm");
  const resetBtn = document.getElementById("resetProfile");

  const profile = loadProfile();
  renderProfile(profile);
  fillForm(profile);

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const fullName = form.fullName.value.trim();
      const email = form.email.value.trim();
      const bio = form.bio.value.trim();
      const cuisinesRaw = form.favoriteCuisines.value.trim();

      if (!fullName) {
        showMessage("Họ và tên không được để trống.", "error");
        return;
      }

      if (email && !/^\S+@\S+\.\S+$/.test(email)) {
        showMessage("Email không hợp lệ.", "error");
        return;
      }

      const favoriteCuisines = cuisinesRaw
        ? cuisinesRaw.split(",").map((s) => s.trim())
        : [];

      const updated = {
        fullName,
        email,
        bio,
        favoriteCuisines,
      };

      saveProfile(updated);
      renderProfile(updated);
      showMessage("Đã lưu hồ sơ thành công.", "success");
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      localStorage.removeItem(STORAGE_KEY);
      const defaults = getDefaultProfile();
      renderProfile(defaults);
      fillForm(defaults);
      showMessage("Đã đặt lại dữ liệu hồ sơ về mặc định.", "success");
    });
  }
});

