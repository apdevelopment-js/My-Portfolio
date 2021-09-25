gsap.registerPlugin(ScrollTrigger);
gsap.set(".banner3d-1", { perspectiveOrigin: "center -100vh"});
gsap.set(".banner3d-2", { perspectiveOrigin: "center -100vh"});
gsap.set(".banner3d-3", { perspectiveOrigin: "center -100vh"});
gsap.set(".banner3d-4", { perspectiveOrigin: "left -100vh"});

gsap.to(".banner3d-1", {
  scrollTrigger: {
    trigger: ".banner3d-1",
    scrub: true,
    start: "top bottom",
    end: "bottom top"
  },
  perspectiveOrigin: "center 100vh", 
  ease: "none"
});

gsap.to(".banner3d-2", {
  scrollTrigger: {
    trigger: ".banner3d-2",
    scrub: true,
    start: "top bottom",
    end: "bottom top"
  },
  perspectiveOrigin: "center 100vh", 
  ease: "none"
});

gsap.to(".banner3d-3", {
  scrollTrigger: {
    trigger: ".banner3d-3",
    scrub: true,
    start: "top bottom",
    end: "bottom top"
  },
  perspectiveOrigin: "center 100vh", 
  ease: "none"
});

gsap.to(".banner3d-4", {
  scrollTrigger: {
    trigger: ".banner3d-4",
    scrub: true,
    start: "top bottom",
    end: "bottom top"
  },
  perspectiveOrigin: "left 100vh", 
  ease: "none"
});



new Vue({
    el: "#app",
    data() {
      return {
        audio: null,
        circleLeft: null,
        barWidth: null,
        duration: null,
        currentTime: null,
        isTimerPlaying: false,
        tracks: [
          {
            name: "Jordan Manchas",
            artist: "Skinny Flex",
            cover: "https://assets.audiomack.com/skinny-flex/e928f994e72bda8d0da3830fec0ca53d601d3b6bfd046d53dede6806f8befab1.jpeg?width=1000&height=1000&max=true",
            source: "file:///C:/Users/sygrida/Desktop/My%20Portfolio/Skinny%20Flex%20ft.%20El%20Patron%20970%20-%20JORDAN%20MANCHÁS%20(Official%20Video)%20%23spanishdrill.mp3",
            url: "https://www.youtube.com/watch?v=YuGibFTTXuQ",
            favorited: false
          },
          {
            name: "We Don't Dance ",
            artist: "M24",
            cover: "https://i.scdn.co/image/ab67616d0000b273fced134fcf6189fb073396c2",
            source: "file:///C:/Users/sygrida/Desktop/My%20Portfolio/M24%20x%20Stickz%20-%20We%20Don’t%20Dance%20[Music%20Video]%20-%20GRM%20Daily.mp3",
            url: "https://www.youtube.com/watch?v=H-Dd5DBLxyk",
            favorited: false
          },
          {
            name: "Location",
            artist: "Dave",
            cover: "https://images.genius.com/b8fd5c26c20c72be0dbbd3ace66f55d4.1000x1000x1.png",
            source: "file:///C:/Users/sygrida/Desktop/My%20Portfolio/Dave%20-%20Location%20ft.%20Burna%20Boy%20(Lyrics).mp3",
            url: "https://www.youtube.com/watch?v=1qNWK2-iJlc",
            favorited: false
          },
          {
            name: "Nice To Meet Ya",
            artist: "Wes Nelson",
            cover: "https://cdns-images.dzcdn.net/images/cover/7051b72950ebd4d9b8fe0e8ed5b68214/350x350.jpg",
            source: "file:///C:/Users/sygrida/Desktop/My%20Portfolio/Wes%20Nelson%20-%20Nice%20To%20Meet%20Ya%20ft.%20Yxng%20Bane%20(Official%20Video).mp3",
            url: "https://www.youtube.com/watch?v=EpXzUMPfk7s",
            favorited: false
          },
          {
            name: "Tunde",
            artist: "Noizy",
            cover: "https://images.genius.com/21f2f06cd0dcddd11790c1a4dc7985fa.1000x1000x1.jpg",
            source: "file:///C:/Users/sygrida/Desktop/My%20Portfolio/NOIZY%20-%20TUNDE%20(Official%20Video%20HD).mp3",
            url: "https://www.youtube.com/watch?v=FXH-QDAFHo8",
            favorited: false
          },
          {
            name: "Element",
            artist: "Pop Smoke",
            cover: "https://cdns-images.dzcdn.net/images/cover/789cd725f925dc4dd973f0b6d0a5fa42/350x350.jpg",
            source: "file:///C:/Users/sygrida/Desktop/My%20Portfolio/POP%20SMOKE%20-%20ELEMENT%20(Official%20Lyric%20Video).mp3",
            url: "https://www.youtube.com/watch?v=EZkNUmVXg6U",
            favorited: false
          },
          {
            name: "Criminal Immigrant",
            artist: "Mc Kresha",
            cover: "https://cdns-images.dzcdn.net/images/cover/7c43feca27ebecb3d864f3fd95ba34b7/264x264.jpg",
            source: "file:///C:/Users/sygrida/Desktop/My%20Portfolio/MC%20Kresha%20&%20Lyrical%20Son%20-%20Criminal%20Immigrant.mp3",
            url: "https://www.youtube.com/watch?v=DezLXyykmdc",
            favorited: false
          },
          {
            name: "Nje Here Ne Jete",
            artist: "Dafina Zeqiri",
            cover: "https://cdns-images.dzcdn.net/images/cover/7ed5ae31aac028edb868e443eb3622e2/350x350.jpg",
            source: "file:///C:/Users/sygrida/Desktop/My%20Portfolio/Cricket%20ft%20Dafina%20Zeqiri%20-%20Nje%20here%20ne%20jete%20(Official%20Music%20Video).mp3",
            url: "https://www.youtube.com/watch?v=acHFqpdqw8E",
            favorited: false
          },
          {
            name: "Rag'n'Bone Man",
            artist: "Human",
            cover: "https://www.songmeaningsandfacts.com/wp-content/uploads/2019/09/Human.png",
            source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
            url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
            favorited: false
          }
        ],
        currentTrack: null,
        currentTrackIndex: 0,
        transitionName: null
      };
    },
    methods: {
      play() {
        if (this.audio.paused) {
          this.audio.play();
          this.isTimerPlaying = true;
        } else {
          this.audio.pause();
          this.isTimerPlaying = false;
        }
      },
      generateTime() {
        let width = (100 / this.audio.duration) * this.audio.currentTime;
        this.barWidth = width + "%";
        this.circleLeft = width + "%";
        let durmin = Math.floor(this.audio.duration / 60);
        let dursec = Math.floor(this.audio.duration - durmin * 60);
        let curmin = Math.floor(this.audio.currentTime / 60);
        let cursec = Math.floor(this.audio.currentTime - curmin * 60);
        if (durmin < 10) {
          durmin = "0" + durmin;
        }
        if (dursec < 10) {
          dursec = "0" + dursec;
        }
        if (curmin < 10) {
          curmin = "0" + curmin;
        }
        if (cursec < 10) {
          cursec = "0" + cursec;
        }
        this.duration = durmin + ":" + dursec;
        this.currentTime = curmin + ":" + cursec;
      },
      updateBar(x) {
        let progress = this.$refs.progress;
        let maxduration = this.audio.duration;
        let position = x - progress.offsetLeft;
        let percentage = (100 * position) / progress.offsetWidth;
        if (percentage > 100) {
          percentage = 100;
        }
        if (percentage < 0) {
          percentage = 0;
        }
        this.barWidth = percentage + "%";
        this.circleLeft = percentage + "%";
        this.audio.currentTime = (maxduration * percentage) / 100;
        this.audio.play();
      },
      clickProgress(e) {
        this.isTimerPlaying = true;
        this.audio.pause();
        this.updateBar(e.pageX);
      },
      prevTrack() {
        this.transitionName = "scale-in";
        this.isShowCover = false;
        if (this.currentTrackIndex > 0) {
          this.currentTrackIndex--;
        } else {
          this.currentTrackIndex = this.tracks.length - 1;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      nextTrack() {
        this.transitionName = "scale-out";
        this.isShowCover = false;
        if (this.currentTrackIndex < this.tracks.length - 1) {
          this.currentTrackIndex++;
        } else {
          this.currentTrackIndex = 0;
        }
        this.currentTrack = this.tracks[this.currentTrackIndex];
        this.resetPlayer();
      },
      resetPlayer() {
        this.barWidth = 0;
        this.circleLeft = 0;
        this.audio.currentTime = 0;
        this.audio.src = this.currentTrack.source;
        setTimeout(() => {
          if(this.isTimerPlaying) {
            this.audio.play();
          } else {
            this.audio.pause();
          }
        }, 300);
      },
      favorite() {
        this.tracks[this.currentTrackIndex].favorited = !this.tracks[
          this.currentTrackIndex
        ].favorited;
      }
    },
    created() {
      let vm = this;
      this.currentTrack = this.tracks[0];
      this.audio = new Audio();
      this.audio.src = this.currentTrack.source;
      this.audio.ontimeupdate = function() {
        vm.generateTime();
      };
      this.audio.onloadedmetadata = function() {
        vm.generateTime();
      };
      this.audio.onended = function() {
        vm.nextTrack();
        this.isTimerPlaying = true;
      };
  
      // this is optional (for preload covers)
      for (let index = 0; index < this.tracks.length; index++) {
        const element = this.tracks[index];
        let link = document.createElement('link');
        link.rel = "prefetch";
        link.href = element.cover;
        link.as = "image"
        document.head.appendChild(link)
      }
    }
  });