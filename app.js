const formBtn = $("#BTN");
const cityInput = $("#cityInput");
const imgInput = $("#imgInput");
const cardsContainer = $("#cardsContainer");

formBtn.on("click", function () {
  //   cardsContainer.append
  _createCard(cityInput.val(), imgInput.val()).appendTo($("#DrawCards"));

  function _createCard(cityInput, imgInput) {
    const card = $(
      `<div class="singleCard"><img src= ${imgInput} style="width:100%"><div class="container"><h4><b>${cityInput}</b></h4><button><img id="likeBtn" src="./Images/unnamed.png"</button> <p>Likes:<span id="likesNum">0</p></div></div>`
    );

    return card;

    function _increaseLikes() {}
  }
});
{
  /* <div class="card">
  <img src="img_avatar.png" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
  </div>
</div> */
}
