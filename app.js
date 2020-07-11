const formBtn = $("#BTN");
const cityInput = $("#cityInput");
const imgInput = $("#imgInput");
const cardsContainer = $("#cardsContainer");

formBtn.on("click", function () {
  //   cardsContainer.append
  _createCard(cityInput.val(), imgInput.val()).appendTo($("#DrawCards"));

  $("#likeBtn").on("click", function (e) {
    setTimeout(() => {
      const currentNumberOfLikes = Number($("#likesNum").text());
      const newNumberOfLikes = currentNumberOfLikes + 1;
      Number($("#likesNum").text(newNumberOfLikes));
    }, 2000);
  });

  function _createCard(cityInput, imgInput) {
    const card = $(
      `<div class="singleCard"><img src= ${imgInput} style="width:100%"><div class="container"><h4><b>${cityInput}</b></h4><button><img id="likeBtn" src="./Images/unnamed.png"</button> <p>Likes:<span id="likesNum">0</span></p></div></div>`
    );

    return card;
  }
});
