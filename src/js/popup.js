function getRegex() {
  return /[\w!@#$%^&*()]{4}(-[\w!@#$%^&*()]{4}){3}/;
}

function getRegexPermutation() {
  var regex = getRegex();
  var randExp = new RandExp(regex);

  return randExp.gen();
}

function selectElement(element) {
  element.focus();
  element.select();
}

document.addEventListener('DOMContentLoaded', () => {
  var regen = document.getElementById('regen');
  regen.addEventListener('mouseup', () => {
    selectElement(regen);
  });

  var refresh = document.getElementById('refresh');
  refresh.addEventListener('click', () => {
    regen.value = getRegexPermutation();

    selectElement(regen);
  });

  regen.value = getRegexPermutation();
});
