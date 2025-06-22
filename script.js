window.startSurprise = function () {
  const name = nameInput.value.trim();
  if (!name) return;

  document.getElementById("inputSection").classList.add("hidden");
  document.getElementById("searchingSection").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("searchMessage").textContent =
      "🎉 Oh! It's your birthday today!";

    setTimeout(() => {
      document.getElementById("searchingSection").classList.add("hidden");
      document.getElementById("birthdaySection").classList.remove("hidden");
      document.getElementById("nameDisplay").textContent = name;

      // Add custom messages
      document.getElementById("finalMessage").textContent =
        "One more year closer to becoming alumni legends!";
      document.getElementById("customWish").textContent =
        "Wishing you endless joy, laughter, and love on your special day. May this year bring you everything you've dreamed of!";
      document.getElementById("fromMessage").textContent = "~ From, Chaitanya Teja";
    }, 2000);
  }, 1500);
};
