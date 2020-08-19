// Executar a seguinte função ao fim do carregamento do body
document.querySelector('body').onload = function() {
	
	let tweetElements = document.querySelectorAll('.containerTweets'),
		windowHeight = document.documentElement.clientHeight;


	function tweetAnimScroll() {

		for (tweet of tweetElements) {

			if (tweet.getBoundingClientRect().top <= windowHeight - tweet.getBoundingClientRect().height) {
				tweet.classList.add('containerTweetsAnim');
			}
		}
	}

	tweetAnimScroll();
	document.querySelector('body').onscroll = tweetAnimScroll;
}