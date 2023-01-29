import React from "react";

import classes from './Styles/MainLogo.module.css';

const MainLogo = () => {
  return (
    <div className={classes.wraper}>
      <svg className={classes.logo}
        viewBox="0 0 180 80"
        fill="none"
        preserveAspectRatio="xMidYMax meet"
      >
        <g id="logo">
          <rect fill />
          <g id="group">
            <g id="signText">
              <path
                d="M43.0188 30.68C42.8648 30.834 42.7878 31.03 42.7878 31.268V39.374H31.6788V31.268C31.6788 31.044 31.6018 30.855 31.4478 30.701C31.2938 30.533 31.0978 30.449 30.8598 30.449C30.6358 30.449 30.4398 30.533 30.2718 30.701C30.1178 30.855 30.0408 31.044 30.0408 31.268V49.118C30.0408 49.342 30.1178 49.538 30.2718 49.706C30.4398 49.86 30.6358 49.937 30.8598 49.937C31.0978 49.937 31.2938 49.86 31.4478 49.706C31.6018 49.552 31.6788 49.356 31.6788 49.118V41.012H42.7878V49.118C42.7878 49.356 42.8648 49.552 43.0188 49.706C43.1728 49.86 43.3688 49.937 43.6068 49.937C43.8168 49.937 44.0058 49.86 44.1738 49.706C44.3418 49.538 44.4258 49.342 44.4258 49.118V31.268C44.4258 31.044 44.3418 30.855 44.1738 30.701C44.0198 30.533 43.8308 30.449 43.6068 30.449H43.2498L43.0188 30.68ZM55.7787 31.058C55.7647 31.03 55.7507 31.009 55.7367 30.995C55.7367 30.967 55.7297 30.939 55.7157 30.911L55.6107 30.785C55.5967 30.785 55.5687 30.764 55.5267 30.722L55.4847 30.68C55.3867 30.624 55.2817 30.589 55.1697 30.575H55.1067C55.0927 30.561 55.0647 30.554 55.0227 30.554H55.0017C54.9737 30.554 54.9527 30.561 54.9387 30.575H54.8757C54.7637 30.589 54.6657 30.624 54.5817 30.68L54.5607 30.701C54.5467 30.701 54.5327 30.708 54.5187 30.722C54.5047 30.764 54.4837 30.785 54.4557 30.785L54.3507 30.911C54.3367 30.939 54.3227 30.967 54.3087 30.995C54.3087 31.009 54.3017 31.03 54.2877 31.058L46.8957 48.908C46.7977 49.118 46.7977 49.328 46.8957 49.538C46.9517 49.692 47.0497 49.818 47.1897 49.916C47.3297 50 47.4767 50.042 47.6307 50.042C47.9947 50.042 48.2467 49.874 48.3867 49.538L55.0227 33.494L61.6797 49.538C61.8057 49.874 62.0577 50.042 62.4357 50.042C62.7717 50.042 63.0167 49.874 63.1707 49.538C63.2547 49.328 63.2547 49.118 63.1707 48.908L55.7787 31.058ZM72.1367 49.076C72.1367 49.3 72.2137 49.496 72.3677 49.664C72.5217 49.818 72.7177 49.895 72.9557 49.895C73.1797 49.895 73.3687 49.818 73.5227 49.664C73.6907 49.496 73.7747 49.3 73.7747 49.076V40.088L80.4737 31.688C80.5997 31.492 80.6557 31.296 80.6417 31.1C80.6137 30.904 80.5227 30.736 80.3687 30.596C80.2147 30.456 80.0397 30.386 79.8437 30.386C79.5777 30.386 79.3607 30.484 79.1927 30.68L72.9557 38.492L66.7187 30.68C66.5507 30.484 66.3267 30.386 66.0467 30.386C65.8507 30.386 65.6757 30.456 65.5217 30.596C65.3817 30.736 65.2977 30.904 65.2697 31.1C65.2557 31.296 65.3117 31.492 65.4377 31.688L72.1367 40.088V49.076ZM91.8314 31.058C91.8174 31.03 91.8034 31.009 91.7894 30.995C91.7894 30.967 91.7824 30.939 91.7684 30.911L91.6634 30.785C91.6494 30.785 91.6214 30.764 91.5794 30.722L91.5374 30.68C91.4394 30.624 91.3344 30.589 91.2224 30.575H91.1594C91.1454 30.561 91.1174 30.554 91.0754 30.554H91.0544C91.0264 30.554 91.0054 30.561 90.9914 30.575H90.9284C90.8164 30.589 90.7184 30.624 90.6344 30.68L90.6134 30.701C90.5994 30.701 90.5854 30.708 90.5714 30.722C90.5574 30.764 90.5364 30.785 90.5084 30.785L90.4034 30.911C90.3894 30.939 90.3754 30.967 90.3614 30.995C90.3614 31.009 90.3544 31.03 90.3404 31.058L82.9484 48.908C82.8504 49.118 82.8504 49.328 82.9484 49.538C83.0044 49.692 83.1024 49.818 83.2424 49.916C83.3824 50 83.5294 50.042 83.6834 50.042C84.0474 50.042 84.2994 49.874 84.4394 49.538L91.0754 33.494L97.7324 49.538C97.8584 49.874 98.1104 50.042 98.4885 50.042C98.8244 50.042 99.0695 49.874 99.2235 49.538C99.3075 49.328 99.3075 49.118 99.2235 48.908L91.8314 31.058ZM107.979 49.643C108.175 49.643 108.371 49.566 108.567 49.412L108.777 49.181V31.751H114.153C114.391 31.751 114.587 31.681 114.741 31.541C114.895 31.387 114.972 31.191 114.972 30.953C114.972 30.715 114.888 30.526 114.72 30.386C114.58 30.218 114.391 30.134 114.153 30.134H101.805C101.567 30.134 101.371 30.218 101.217 30.386C101.063 30.54 100.986 30.729 100.986 30.953C100.986 31.191 101.063 31.387 101.217 31.541C101.371 31.681 101.567 31.751 101.805 31.751H107.181V48.824C107.181 49.076 107.251 49.272 107.391 49.412C107.587 49.566 107.783 49.643 107.979 49.643ZM118.945 48.467V32.213L128.941 32.234C129.165 32.234 129.354 32.157 129.508 32.003C129.662 31.849 129.739 31.653 129.739 31.415V31.079L129.508 30.827C129.354 30.673 129.165 30.596 128.941 30.596L118.126 30.575C117.902 30.575 117.713 30.659 117.559 30.827C117.405 30.981 117.328 31.17 117.328 31.394V49.286C117.328 49.51 117.405 49.706 117.559 49.874C117.713 50.028 117.902 50.105 118.126 50.105H128.941C129.165 50.105 129.354 50.028 129.508 49.874C129.662 49.706 129.739 49.51 129.739 49.286C129.739 49.076 129.662 48.88 129.508 48.698L129.256 48.467H118.945ZM126.988 40.907C127.142 40.753 127.219 40.564 127.219 40.34C127.219 40.116 127.142 39.927 126.988 39.773C126.834 39.605 126.645 39.521 126.421 39.521H120.373V41.159H126.757L126.988 40.907Z"
                
              />
              <path
                d="M43.0188 30.68L43.7259 31.3871L43.7259 31.3871L43.0188 30.68ZM42.7878 39.374V40.374H43.7878V39.374H42.7878ZM31.6788 39.374H30.6788V40.374H31.6788V39.374ZM31.4478 30.701L30.7106 31.3767L30.7253 31.3927L30.7406 31.4081L31.4478 30.701ZM30.2718 30.701L30.9789 31.4081L30.9789 31.4081L30.2718 30.701ZM30.2718 49.706L29.5346 50.3817L29.564 50.4138L29.596 50.4432L30.2718 49.706ZM31.4478 49.706L30.7406 48.9989L30.7406 48.9989L31.4478 49.706ZM31.6788 41.012V40.012H30.6788V41.012H31.6788ZM42.7878 41.012H43.7878V40.012H42.7878V41.012ZM43.0188 49.706L43.7259 48.9989L43.7259 48.9989L43.0188 49.706ZM44.1738 49.706L44.8495 50.4432L44.8655 50.4285L44.8809 50.4131L44.1738 49.706ZM44.1738 30.701L43.4366 31.3767L43.466 31.4088L43.498 31.4382L44.1738 30.701ZM43.2498 30.449V29.449H42.8355L42.5426 29.7419L43.2498 30.449ZM42.3117 29.9729C41.9518 30.3328 41.7878 30.7919 41.7878 31.268H43.7878C43.7878 31.258 43.7891 31.2755 43.7763 31.3082C43.7627 31.3425 43.7427 31.3703 43.7259 31.3871L42.3117 29.9729ZM41.7878 31.268V39.374H43.7878V31.268H41.7878ZM42.7878 38.374H31.6788V40.374H42.7878V38.374ZM32.6788 39.374V31.268H30.6788V39.374H32.6788ZM32.6788 31.268C32.6788 30.7872 32.5023 30.3413 32.1549 29.9939L30.7406 31.4081C30.7298 31.3973 30.71 31.3726 30.6949 31.3355C30.68 31.299 30.6788 31.2727 30.6788 31.268H32.6788ZM32.1849 30.0253C31.8322 29.6405 31.364 29.449 30.8598 29.449V31.449C30.8603 31.449 30.8533 31.449 30.8404 31.4465C30.8272 31.444 30.8102 31.4392 30.7913 31.4311C30.7501 31.4135 30.7227 31.39 30.7106 31.3767L32.1849 30.0253ZM30.8598 29.449C30.3532 29.449 29.9076 29.651 29.5646 29.9939L30.9789 31.4081C30.9832 31.4038 30.9702 31.4176 30.9387 31.4311C30.906 31.4452 30.8762 31.449 30.8598 31.449V29.449ZM29.5646 29.9939C29.2172 30.3413 29.0408 30.7872 29.0408 31.268H31.0408C31.0408 31.2727 31.0395 31.299 31.0246 31.3355C31.0095 31.3726 30.9897 31.3973 30.9789 31.4081L29.5646 29.9939ZM29.0408 31.268V49.118H31.0408V31.268H29.0408ZM29.0408 49.118C29.0408 49.597 29.2148 50.0329 29.5346 50.3817L31.0089 49.0303C31.0081 49.0294 31.0193 49.0419 31.0293 49.0673C31.0394 49.0931 31.0408 49.1129 31.0408 49.118H29.0408ZM29.596 50.4432C29.9449 50.763 30.3808 50.937 30.8598 50.937V48.937C30.8648 48.937 30.8847 48.9384 30.9104 48.9485C30.9359 48.9585 30.9484 48.9697 30.9475 48.9688L29.596 50.4432ZM30.8598 50.937C31.3359 50.937 31.795 50.773 32.1549 50.4131L30.7406 48.9989C30.7575 48.9821 30.7852 48.962 30.8196 48.9485C30.8523 48.9357 30.8698 48.937 30.8598 48.937V50.937ZM32.1549 50.4131C32.5147 50.0532 32.6788 49.5941 32.6788 49.118H30.6788C30.6788 49.128 30.6774 49.1105 30.6903 49.0778C30.7038 49.0435 30.7238 49.0157 30.7406 48.9989L32.1549 50.4131ZM32.6788 49.118V41.012H30.6788V49.118H32.6788ZM31.6788 42.012H42.7878V40.012H31.6788V42.012ZM41.7878 41.012V49.118H43.7878V41.012H41.7878ZM41.7878 49.118C41.7878 49.5941 41.9518 50.0532 42.3116 50.4131L43.7259 48.9989C43.7427 49.0157 43.7627 49.0435 43.7763 49.0778C43.7891 49.1105 43.7878 49.128 43.7878 49.118H41.7878ZM42.3116 50.4131C42.6715 50.773 43.1306 50.937 43.6068 50.937V48.937C43.5967 48.937 43.6143 48.9357 43.6469 48.9485C43.6813 48.962 43.709 48.9821 43.7259 48.9989L42.3116 50.4131ZM43.6068 50.937C44.0892 50.937 44.5142 50.7505 44.8495 50.4432L43.498 48.9688C43.4914 48.975 43.5012 48.9643 43.5287 48.9532C43.5575 48.9414 43.5862 48.937 43.6068 48.937V50.937ZM44.8809 50.4131C45.2238 50.0702 45.4258 49.6246 45.4258 49.118H43.4258C43.4258 49.1015 43.4296 49.0718 43.4436 49.0391C43.4571 49.0075 43.4709 48.9946 43.4666 48.9989L44.8809 50.4131ZM45.4258 49.118V31.268H43.4258V49.118H45.4258ZM45.4258 31.268C45.4258 30.7582 45.22 30.3035 44.8495 29.9638L43.498 31.4382C43.4912 31.4319 43.4682 31.4077 43.4489 31.3644C43.4295 31.3207 43.4258 31.2842 43.4258 31.268H45.4258ZM44.9109 30.0253C44.5713 29.6547 44.1166 29.449 43.6068 29.449V31.449C43.5906 31.449 43.5541 31.4452 43.5104 31.4258C43.4671 31.4066 43.4429 31.3836 43.4366 31.3767L44.9109 30.0253ZM43.6068 29.449H43.2498V31.449H43.6068V29.449ZM42.5426 29.7419L42.3116 29.9729L43.7259 31.3871L43.9569 31.1561L42.5426 29.7419ZM55.7787 31.058L56.7026 30.6754L56.689 30.6426L56.6731 30.6108L55.7787 31.058ZM55.7367 30.995H54.7367V31.4092L55.0296 31.7021L55.7367 30.995ZM55.7157 30.911L56.6101 30.4638L56.5582 30.36L56.4839 30.2708L55.7157 30.911ZM55.6107 30.785L56.3789 30.1448L56.0791 29.785H55.6107V30.785ZM55.5267 30.722L56.2338 30.0149L56.2338 30.0149L55.5267 30.722ZM55.4847 30.68L56.1918 29.9729L56.0971 29.8782L55.9809 29.8118L55.4847 30.68ZM55.1697 30.575L55.2938 29.5827L55.232 29.575H55.1697V30.575ZM55.1067 30.575L54.3996 31.2821L54.6925 31.575H55.1067V30.575ZM54.9387 30.575V31.575H55.3529L55.6458 31.2821L54.9387 30.575ZM54.8757 30.575V29.575H54.8135L54.7517 29.5827L54.8757 30.575ZM54.5817 30.68L54.027 29.848L53.9446 29.9029L53.8746 29.9729L54.5817 30.68ZM54.5607 30.701V31.701H54.9749L55.2678 31.4081L54.5607 30.701ZM54.5187 30.722L53.8116 30.0149L53.6447 30.1818L53.57 30.4058L54.5187 30.722ZM54.4557 30.785V29.785H53.9873L53.6875 30.1448L54.4557 30.785ZM54.3507 30.911L53.5825 30.2708L53.5082 30.36L53.4563 30.4638L54.3507 30.911ZM54.3087 30.995L53.4143 30.5478L53.3087 30.7589V30.995H54.3087ZM54.2877 31.058L53.3933 30.6108L53.3774 30.6426L53.3638 30.6754L54.2877 31.058ZM46.8957 48.908L47.8019 49.3309L47.8112 49.3109L47.8196 49.2906L46.8957 48.908ZM46.8957 49.538L47.8355 49.1963L47.8205 49.1549L47.8019 49.1151L46.8957 49.538ZM47.1897 49.916L46.6163 50.7352L46.6451 50.7554L46.6752 50.7735L47.1897 49.916ZM48.3867 49.538L49.3098 49.9226L49.3108 49.9202L48.3867 49.538ZM55.0227 33.494L55.9464 33.1108L55.0213 30.8812L54.0986 33.1118L55.0227 33.494ZM61.6797 49.538L62.616 49.1869L62.61 49.1707L62.6034 49.1548L61.6797 49.538ZM63.1707 49.538L64.0798 49.9547L64.09 49.9323L64.0992 49.9094L63.1707 49.538ZM63.1707 48.908L64.0993 48.5366L64.0946 48.5254L63.1707 48.908ZM56.6731 30.6108C56.6356 30.5357 56.5648 30.4088 56.4438 30.2879L55.0296 31.7021C54.9794 31.6519 54.9458 31.6061 54.9257 31.5759C54.905 31.5449 54.8916 31.5199 54.8843 31.5052L56.6731 30.6108ZM56.7367 30.995C56.7367 30.7942 56.6853 30.6141 56.6101 30.4638L54.8213 31.3582C54.7741 31.2639 54.7367 31.1398 54.7367 30.995H56.7367ZM56.4839 30.2708L56.3789 30.1448L54.8425 31.4252L54.9475 31.5512L56.4839 30.2708ZM55.6107 29.785C55.8338 29.785 55.9935 29.861 56.0448 29.8866C56.1124 29.9204 56.1591 29.9542 56.1792 29.9693C56.2202 30 56.241 30.022 56.2338 30.0149L54.8196 31.4291C54.8545 31.464 54.9103 31.5175 54.9792 31.5692C55.0133 31.5948 55.0723 31.6364 55.1504 31.6755C55.2122 31.7064 55.3806 31.785 55.6107 31.785V29.785ZM56.2338 30.0149L56.1918 29.9729L54.7776 31.3871L54.8196 31.4291L56.2338 30.0149ZM55.9809 29.8118C55.7682 29.6903 55.5368 29.6131 55.2938 29.5827L55.0457 31.5673C55.0376 31.5663 55.0274 31.5642 55.0162 31.5604C55.005 31.5567 54.9956 31.5523 54.9886 31.5482L55.9809 29.8118ZM55.1697 29.575H55.1067V31.575H55.1697V29.575ZM55.8138 29.8679C55.6329 29.687 55.432 29.6177 55.3177 29.5891C55.1974 29.559 55.092 29.554 55.0227 29.554V31.554C54.9954 31.554 54.925 31.5525 54.8327 31.5294C54.7464 31.5078 54.5665 31.449 54.3996 31.2821L55.8138 29.8679ZM55.0227 29.554H55.0017V31.554H55.0227V29.554ZM55.0017 29.554C54.8196 29.554 54.4993 29.6002 54.2316 29.8679L55.6458 31.2821C55.4061 31.5218 55.1279 31.554 55.0017 31.554V29.554ZM54.9387 29.575H54.8757V31.575H54.9387V29.575ZM54.7517 29.5827C54.504 29.6137 54.2548 29.6961 54.027 29.848L55.1364 31.512C55.0767 31.5519 55.0234 31.5643 54.9998 31.5673L54.7517 29.5827ZM53.8746 29.9729L53.8536 29.9939L55.2678 31.4081L55.2888 31.3871L53.8746 29.9729ZM54.5607 29.701C54.188 29.701 53.9346 29.8919 53.8116 30.0149L55.2258 31.4291C55.1308 31.5241 54.9055 31.701 54.5607 31.701V29.701ZM53.57 30.4058C53.59 30.3458 53.6455 30.202 53.7854 30.0621C53.9498 29.8977 54.1872 29.785 54.4557 29.785V31.785C55.148 31.785 55.4099 31.2109 55.4674 31.0382L53.57 30.4058ZM53.6875 30.1448L53.5825 30.2708L55.1189 31.5512L55.2239 31.4252L53.6875 30.1448ZM53.4563 30.4638C53.4423 30.4918 53.4283 30.5198 53.4143 30.5478L55.2031 31.4422C55.2171 31.4142 55.2311 31.3862 55.2451 31.3582L53.4563 30.4638ZM53.3087 30.995C53.3087 30.8507 53.3416 30.7444 53.3548 30.705C53.371 30.6565 53.387 30.6233 53.3933 30.6108L55.1821 31.5052C55.2001 31.4694 55.3087 31.2638 55.3087 30.995H53.3087ZM53.3638 30.6754L45.9718 48.5254L47.8196 49.2906L55.2116 31.4406L53.3638 30.6754ZM45.9895 48.4851C45.7664 48.9632 45.7664 49.4828 45.9895 49.9609L47.8019 49.1151C47.8082 49.1287 47.8222 49.1673 47.8222 49.223C47.8222 49.2787 47.8082 49.3173 47.8019 49.3309L45.9895 48.4851ZM45.9559 49.8797C46.0852 50.2354 46.3157 50.5248 46.6163 50.7352L47.7632 49.0968C47.7692 49.101 47.7841 49.1129 47.8006 49.1341C47.8173 49.1556 47.8288 49.1779 47.8355 49.1963L45.9559 49.8797ZM46.6752 50.7735C46.9609 50.9449 47.2844 51.042 47.6307 51.042V49.042C47.6459 49.042 47.6632 49.0443 47.6797 49.049C47.6958 49.0536 47.7043 49.0585 47.7042 49.0585L46.6752 50.7735ZM47.6307 51.042C47.9697 51.042 48.3265 50.962 48.6474 50.7481C48.9684 50.5341 49.1794 50.2355 49.3098 49.9226L47.4636 49.1534C47.4581 49.1666 47.4588 49.1607 47.4714 49.1446C47.4848 49.1273 47.5068 49.1047 47.538 49.0839C47.5692 49.0632 47.5985 49.0515 47.6196 49.0457C47.6394 49.0403 47.645 49.042 47.6307 49.042V51.042ZM49.3108 49.9202L55.9468 33.8762L54.0986 33.1118L47.4626 49.1558L49.3108 49.9202ZM54.0991 33.8772L60.7561 49.9212L62.6034 49.1548L55.9464 33.1108L54.0991 33.8772ZM60.7434 49.8891C60.866 50.2162 61.0776 50.5274 61.4085 50.7481C61.7354 50.9659 62.0984 51.042 62.4357 51.042V49.042C62.3951 49.042 62.4431 49.0341 62.5179 49.0839C62.553 49.1073 62.5798 49.1345 62.5978 49.1585C62.6149 49.1813 62.6187 49.194 62.616 49.1869L60.7434 49.8891ZM62.4357 51.042C62.7782 51.042 63.1267 50.9535 63.437 50.7407C63.7413 50.5321 63.9456 50.2474 64.0798 49.9547L62.2617 49.1213C62.2418 49.1646 62.2466 49.1319 62.3059 49.0913C62.3343 49.0718 62.3648 49.058 62.3929 49.0499C62.4199 49.042 62.436 49.042 62.4357 49.042V51.042ZM64.0992 49.9094C64.2786 49.461 64.2786 48.985 64.0992 48.5366L62.2422 49.2794C62.2407 49.2754 62.2337 49.2547 62.2337 49.223C62.2337 49.1913 62.2407 49.1706 62.2422 49.1666L64.0992 49.9094ZM64.0946 48.5254L56.7026 30.6754L54.8548 31.4406L62.2468 49.2906L64.0946 48.5254ZM72.3677 49.664L71.6306 50.3397L71.6453 50.3557L71.6606 50.3711L72.3677 49.664ZM73.5227 49.664L74.2298 50.3711L74.2298 50.3711L73.5227 49.664ZM73.7747 40.088L72.9929 39.4645L72.7747 39.7381V40.088H73.7747ZM80.4737 31.688L81.2556 32.3115L81.2873 32.2716L81.3149 32.2288L80.4737 31.688ZM80.6417 31.1L81.6392 31.0288L81.6367 30.9935L81.6317 30.9586L80.6417 31.1ZM79.1927 30.68L78.4335 30.0292L78.4221 30.0424L78.4112 30.0561L79.1927 30.68ZM72.9557 38.492L72.1742 39.1159L72.9557 40.0948L73.7372 39.1159L72.9557 38.492ZM66.7187 30.68L67.5002 30.0561L67.4893 30.0424L67.478 30.0292L66.7187 30.68ZM65.5217 30.596L64.8491 29.8561L64.8315 29.8721L64.8146 29.8889L65.5217 30.596ZM65.2697 31.1L64.2798 30.9586L64.2748 30.9935L64.2723 31.0288L65.2697 31.1ZM65.4377 31.688L64.5966 32.2288L64.6241 32.2716L64.6559 32.3115L65.4377 31.688ZM72.1367 40.088H73.1367V39.7381L72.9186 39.4645L72.1367 40.088ZM71.1367 49.076C71.1367 49.555 71.3108 49.9909 71.6306 50.3397L73.1049 48.9883C73.1041 48.9874 73.1152 48.9999 73.1252 49.0253C73.1353 49.0511 73.1367 49.0709 73.1367 49.076H71.1367ZM71.6606 50.3711C72.0205 50.731 72.4796 50.895 72.9557 50.895V48.895C72.9457 48.895 72.9632 48.8937 72.9959 48.9065C73.0303 48.92 73.058 48.9401 73.0748 48.9569L71.6606 50.3711ZM72.9557 50.895C73.4365 50.895 73.8824 50.7185 74.2298 50.3711L72.8156 48.9569C72.8265 48.9461 72.8511 48.9263 72.8882 48.9112C72.9247 48.8963 72.951 48.895 72.9557 48.895V50.895ZM74.2298 50.3711C74.5727 50.0282 74.7747 49.5826 74.7747 49.076H72.7747C72.7747 49.0595 72.7786 49.0298 72.7926 48.9971C72.8061 48.9655 72.8199 48.9526 72.8156 48.9569L74.2298 50.3711ZM74.7747 49.076V40.088H72.7747V49.076H74.7747ZM74.5566 40.7115L81.2556 32.3115L79.6919 31.0645L72.9929 39.4645L74.5566 40.7115ZM81.3149 32.2288C81.5354 31.8858 81.6713 31.4782 81.6392 31.0288L79.6443 31.1712C79.6435 31.1608 79.6437 31.1503 79.6448 31.1405C79.6458 31.1307 79.6475 31.1234 79.6487 31.1193C79.6511 31.1108 79.6501 31.12 79.6326 31.1472L81.3149 32.2288ZM81.6317 30.9586C81.569 30.5198 81.358 30.1439 81.0414 29.8561L79.6961 31.3359C79.6973 31.337 79.6858 31.3266 79.6732 31.3033C79.6602 31.2793 79.6539 31.2564 79.6518 31.2414L81.6317 30.9586ZM81.0414 29.8561C80.7158 29.56 80.3048 29.386 79.8437 29.386V31.386C79.8197 31.386 79.7859 31.3811 79.7506 31.367C79.7162 31.3532 79.6982 31.3379 79.6961 31.3359L81.0414 29.8561ZM79.8437 29.386C79.296 29.386 78.798 29.6039 78.4335 30.0292L79.952 31.3308C79.9487 31.3346 79.9291 31.3546 79.8931 31.3709C79.8578 31.3868 79.836 31.386 79.8437 31.386V29.386ZM78.4112 30.0561L72.1742 37.8681L73.7372 39.1159L79.9742 31.3039L78.4112 30.0561ZM73.7372 37.8681L67.5002 30.0561L65.9372 31.3039L72.1742 39.1159L73.7372 37.8681ZM67.478 30.0292C67.1025 29.5912 66.5907 29.386 66.0467 29.386V31.386C66.0687 31.386 66.0554 31.3894 66.0239 31.3757C66.0091 31.3692 65.9948 31.3608 65.9822 31.3514C65.9698 31.3421 65.9624 31.3342 65.9595 31.3308L67.478 30.0292ZM66.0467 29.386C65.5856 29.386 65.1747 29.56 64.8491 29.8561L66.1944 31.3359C66.1922 31.3379 66.1742 31.3532 66.1399 31.367C66.1045 31.3811 66.0708 31.386 66.0467 31.386V29.386ZM64.8146 29.8889C64.5216 30.1819 64.3384 30.5484 64.2798 30.9586L66.2597 31.2414C66.2593 31.244 66.2568 31.257 66.2482 31.2742C66.2395 31.2914 66.2307 31.3012 66.2288 31.3031L64.8146 29.8889ZM64.2723 31.0288C64.2402 31.4782 64.3761 31.8858 64.5966 32.2288L66.2789 31.1472C66.2614 31.12 66.2603 31.1108 66.2628 31.1193C66.2639 31.1234 66.2656 31.1307 66.2667 31.1405C66.2677 31.1503 66.2679 31.1608 66.2672 31.1712L64.2723 31.0288ZM64.6559 32.3115L71.3549 40.7115L72.9186 39.4645L66.2196 31.0645L64.6559 32.3115ZM71.1367 40.088V49.076H73.1367V40.088H71.1367ZM91.8314 31.058L92.7554 30.6754L92.7418 30.6426L92.7259 30.6108L91.8314 31.058ZM91.7894 30.995H90.7894V31.4092L91.0823 31.7021L91.7894 30.995ZM91.7684 30.911L92.6629 30.4638L92.611 30.36L92.5367 30.2708L91.7684 30.911ZM91.6634 30.785L92.4317 30.1448L92.1318 29.785H91.6634V30.785ZM91.5794 30.722L92.2866 30.0149L92.2866 30.0149L91.5794 30.722ZM91.5374 30.68L92.2446 29.9729L92.1499 29.8782L92.0336 29.8118L91.5374 30.68ZM91.2224 30.575L91.3465 29.5827L91.2847 29.575H91.2224V30.575ZM91.1594 30.575L90.4524 31.2821L90.7452 31.575H91.1594V30.575ZM90.9914 30.575V31.575H91.4057L91.6986 31.2821L90.9914 30.575ZM90.9284 30.575V29.575H90.8662L90.8044 29.5827L90.9284 30.575ZM90.6344 30.68L90.0797 29.848L89.9974 29.9029L89.9274 29.9729L90.6344 30.68ZM90.6134 30.701V31.701H91.0277L91.3205 31.4081L90.6134 30.701ZM90.5714 30.722L89.8644 30.0149L89.6974 30.1818L89.6228 30.4058L90.5714 30.722ZM90.5084 30.785V29.785H90.0401L89.7402 30.1448L90.5084 30.785ZM90.4034 30.911L89.6352 30.2708L89.5609 30.36L89.509 30.4638L90.4034 30.911ZM90.3614 30.995L89.467 30.5478L89.3614 30.7589V30.995H90.3614ZM90.3404 31.058L89.446 30.6108L89.4301 30.6426L89.4165 30.6754L90.3404 31.058ZM82.9484 48.908L83.8546 49.3309L83.8639 49.3109L83.8724 49.2906L82.9484 48.908ZM82.9484 49.538L83.8882 49.1963L83.8732 49.1549L83.8546 49.1151L82.9484 49.538ZM83.2424 49.916L82.669 50.7352L82.6978 50.7554L82.728 50.7735L83.2424 49.916ZM84.4394 49.538L85.3625 49.9226L85.3635 49.9202L84.4394 49.538ZM91.0754 33.494L91.9991 33.1108L91.074 30.8812L90.1514 33.1118L91.0754 33.494ZM97.7324 49.538L98.6688 49.1869L98.6627 49.1707L98.6561 49.1548L97.7324 49.538ZM99.2235 49.538L100.133 49.9547L100.143 49.9323L100.152 49.9094L99.2235 49.538ZM99.2235 48.908L100.152 48.5366L100.147 48.5254L99.2235 48.908ZM92.7259 30.6108C92.6883 30.5357 92.6175 30.4088 92.4966 30.2879L91.0823 31.7021C91.0321 31.6519 90.9985 31.6061 90.9784 31.5759C90.9577 31.5449 90.9444 31.5199 90.937 31.5052L92.7259 30.6108ZM92.7894 30.995C92.7894 30.7942 92.738 30.6141 92.6629 30.4638L90.874 31.3582C90.8269 31.2639 90.7894 31.1398 90.7894 30.995H92.7894ZM92.5367 30.2708L92.4317 30.1448L90.8952 31.4252L91.0002 31.5512L92.5367 30.2708ZM91.6634 29.785C91.8865 29.785 92.0462 29.861 92.0975 29.8866C92.1651 29.9204 92.2119 29.9542 92.232 29.9693C92.2729 30 92.2937 30.022 92.2866 30.0149L90.8723 31.4291C90.9072 31.464 90.963 31.5175 91.0319 31.5692C91.066 31.5948 91.125 31.6364 91.2031 31.6755C91.265 31.7064 91.4334 31.785 91.6634 31.785V29.785ZM92.2866 30.0149L92.2446 29.9729L90.8303 31.3871L90.8723 31.4291L92.2866 30.0149ZM92.0336 29.8118C91.821 29.6903 91.5895 29.6131 91.3465 29.5827L91.0984 31.5673C91.0904 31.5663 91.0802 31.5642 91.069 31.5604C91.0578 31.5567 91.0483 31.5523 91.0413 31.5482L92.0336 29.8118ZM91.2224 29.575H91.1594V31.575H91.2224V29.575ZM91.8665 29.8679C91.6857 29.687 91.4847 29.6177 91.3705 29.5891C91.2502 29.559 91.1447 29.554 91.0754 29.554V31.554C91.0482 31.554 90.9777 31.5525 90.8854 31.5294C90.7992 31.5078 90.6192 31.449 90.4524 31.2821L91.8665 29.8679ZM91.0754 29.554H91.0544V31.554H91.0754V29.554ZM91.0544 29.554C90.8723 29.554 90.552 29.6002 90.2843 29.8679L91.6986 31.2821C91.4589 31.5218 91.1806 31.554 91.0544 31.554V29.554ZM90.9914 29.575H90.9284V31.575H90.9914V29.575ZM90.8044 29.5827C90.5567 29.6137 90.3075 29.6961 90.0797 29.848L91.1892 31.512C91.1294 31.5519 91.0762 31.5643 91.0525 31.5673L90.8044 29.5827ZM89.9274 29.9729L89.9064 29.9939L91.3205 31.4081L91.3415 31.3871L89.9274 29.9729ZM90.6134 29.701C90.2407 29.701 89.9873 29.8919 89.8644 30.0149L91.2785 31.4291C91.1836 31.5241 90.9582 31.701 90.6134 31.701V29.701ZM89.6228 30.4058C89.6427 30.3458 89.6982 30.202 89.8381 30.0621C90.0025 29.8977 90.2399 29.785 90.5084 29.785V31.785C91.2007 31.785 91.4626 31.2109 91.5201 31.0382L89.6228 30.4058ZM89.7402 30.1448L89.6352 30.2708L91.1717 31.5512L91.2767 31.4252L89.7402 30.1448ZM89.509 30.4638C89.495 30.4918 89.481 30.5198 89.467 30.5478L91.2559 31.4422C91.2699 31.4142 91.2839 31.3862 91.2979 31.3582L89.509 30.4638ZM89.3614 30.995C89.3614 30.8507 89.3944 30.7444 89.4075 30.705C89.4237 30.6565 89.4398 30.6233 89.446 30.6108L91.2349 31.5052C91.2528 31.4694 91.3614 31.2638 91.3614 30.995H89.3614ZM89.4165 30.6754L82.0245 48.5254L83.8724 49.2906L91.2644 31.4406L89.4165 30.6754ZM82.0423 48.4851C81.8192 48.9632 81.8192 49.4828 82.0423 49.9609L83.8546 49.1151C83.861 49.1287 83.8749 49.1673 83.8749 49.223C83.8749 49.2787 83.861 49.3173 83.8546 49.3309L82.0423 48.4851ZM82.0087 49.8797C82.138 50.2354 82.3684 50.5248 82.669 50.7352L83.8159 49.0968C83.822 49.101 83.8368 49.1129 83.8533 49.1341C83.87 49.1556 83.8816 49.1779 83.8882 49.1963L82.0087 49.8797ZM82.728 50.7735C83.0136 50.9449 83.3372 51.042 83.6834 51.042V49.042C83.6987 49.042 83.7159 49.0443 83.7324 49.049C83.7486 49.0536 83.757 49.0585 83.7569 49.0585L82.728 50.7735ZM83.6834 51.042C84.0225 51.042 84.3792 50.962 84.7001 50.7481C85.0211 50.5341 85.2321 50.2355 85.3625 49.9226L83.5164 49.1534C83.5109 49.1666 83.5115 49.1607 83.5241 49.1446C83.5375 49.1273 83.5596 49.1047 83.5907 49.0839C83.6219 49.0632 83.6513 49.0515 83.6723 49.0457C83.6921 49.0403 83.6978 49.042 83.6834 49.042V51.042ZM85.3635 49.9202L91.9995 33.8762L90.1514 33.1118L83.5154 49.1558L85.3635 49.9202ZM90.1518 33.8772L96.8088 49.9212L98.6561 49.1548L91.9991 33.1108L90.1518 33.8772ZM96.7961 49.8891C96.9188 50.2162 97.1303 50.5274 97.4612 50.7481C97.7881 50.9659 98.1511 51.042 98.4885 51.042V49.042C98.4478 49.042 98.4958 49.0341 98.5707 49.0839C98.6057 49.1073 98.6326 49.1345 98.6506 49.1585C98.6677 49.1813 98.6715 49.194 98.6688 49.1869L96.7961 49.8891ZM98.4885 51.042C98.8309 51.042 99.1795 50.9535 99.4897 50.7407C99.7941 50.5321 99.9984 50.2474 100.133 49.9547L98.3144 49.1213C98.2945 49.1646 98.2993 49.1319 98.3587 49.0913C98.3871 49.0718 98.4175 49.058 98.4456 49.0499C98.4727 49.042 98.4888 49.042 98.4885 49.042V51.042ZM100.152 49.9094C100.331 49.461 100.331 48.985 100.152 48.5366L98.295 49.2794C98.2934 49.2754 98.2865 49.2547 98.2865 49.223C98.2865 49.1913 98.2934 49.1706 98.295 49.1666L100.152 49.9094ZM100.147 48.5254L92.7554 30.6754L90.9075 31.4406L98.2995 49.2906L100.147 48.5254ZM108.567 49.412L109.185 50.1983L109.251 50.1466L109.307 50.0847L108.567 49.412ZM108.777 49.181L109.517 49.8537L109.777 49.5676V49.181H108.777ZM108.777 31.751V30.751H107.777V31.751H108.777ZM114.741 31.541L115.414 32.2809L115.432 32.2649L115.449 32.2481L114.741 31.541ZM114.72 30.386L113.952 31.0262L114.01 31.096L114.08 31.1542L114.72 30.386ZM101.217 30.386L101.925 31.0931L101.94 31.0777L101.955 31.0617L101.217 30.386ZM101.217 31.541L100.51 32.2481L100.527 32.2649L100.545 32.2809L101.217 31.541ZM107.181 31.751H108.181V30.751H107.181V31.751ZM107.391 49.412L106.684 50.1191L106.727 50.1614L106.774 50.1983L107.391 49.412ZM107.979 50.643C108.454 50.643 108.862 50.4526 109.185 50.1983L107.95 48.6257C107.915 48.6532 107.9 48.6574 107.908 48.6545C107.912 48.6529 107.921 48.6499 107.934 48.6473C107.947 48.6447 107.963 48.643 107.979 48.643V50.643ZM109.307 50.0847L109.517 49.8537L108.038 48.5083L107.828 48.7393L109.307 50.0847ZM109.777 49.181V31.751H107.777V49.181H109.777ZM108.777 32.751H114.153V30.751H108.777V32.751ZM114.153 32.751C114.602 32.751 115.05 32.6123 115.414 32.2809L114.069 30.8011C114.078 30.7926 114.09 30.7837 114.104 30.7754C114.117 30.7671 114.131 30.761 114.143 30.7568C114.167 30.7481 114.174 30.751 114.153 30.751V32.751ZM115.449 32.2481C115.808 31.8882 115.972 31.4291 115.972 30.953H113.972C113.972 30.963 113.971 30.9455 113.984 30.9128C113.997 30.8785 114.018 30.8507 114.034 30.8339L115.449 32.2481ZM115.972 30.953C115.972 30.448 115.779 29.966 115.361 29.6178L114.08 31.1542C114.053 31.1319 114.019 31.0925 113.996 31.0389C113.973 30.9877 113.972 30.9529 113.972 30.953H115.972ZM115.489 29.7458C115.14 29.3279 114.658 29.134 114.153 29.134V31.134C114.154 31.134 114.119 31.1336 114.068 31.1108C114.014 31.087 113.975 31.053 113.952 31.0262L115.489 29.7458ZM114.153 29.134H101.805V31.134H114.153V29.134ZM101.805 29.134C101.301 29.134 100.833 29.3255 100.48 29.7103L101.955 31.0617C101.942 31.075 101.915 31.0985 101.874 31.1161C101.855 31.1242 101.838 31.129 101.825 31.1315C101.812 31.134 101.805 31.134 101.805 31.134V29.134ZM100.51 29.6789C100.163 30.0263 99.9865 30.4722 99.9865 30.953H101.986C101.986 30.9577 101.985 30.984 101.97 31.0205C101.955 31.0576 101.935 31.0823 101.925 31.0931L100.51 29.6789ZM99.9865 30.953C99.9865 31.4291 100.15 31.8882 100.51 32.2481L101.925 30.8339C101.941 30.8507 101.961 30.8785 101.975 30.9128C101.988 30.9455 101.986 30.963 101.986 30.953H99.9865ZM100.545 32.2809C100.909 32.6123 101.357 32.751 101.805 32.751V30.751C101.785 30.751 101.792 30.7481 101.816 30.7568C101.828 30.761 101.842 30.7671 101.855 30.7754C101.869 30.7837 101.881 30.7926 101.89 30.8011L100.545 32.2809ZM101.805 32.751H107.181V30.751H101.805V32.751ZM106.181 31.751V48.824H108.181V31.751H106.181ZM106.181 48.824C106.181 49.2653 106.309 49.7439 106.684 50.1191L108.099 48.7049C108.139 48.7449 108.164 48.7895 108.176 48.8237C108.186 48.8537 108.181 48.8588 108.181 48.824H106.181ZM106.774 50.1983C107.097 50.4526 107.505 50.643 107.979 50.643V48.643C107.996 48.643 108.012 48.6447 108.025 48.6473C108.038 48.6499 108.047 48.6529 108.051 48.6545C108.059 48.6574 108.044 48.6532 108.009 48.6257L106.774 50.1983ZM118.945 48.467H117.945V49.467H118.945V48.467ZM118.945 32.213L118.948 31.213L117.945 31.2109V32.213H118.945ZM128.941 32.234L128.939 33.234H128.941V32.234ZM129.508 32.003L128.801 31.2959L128.801 31.2959L129.508 32.003ZM129.739 31.079H130.739V30.69L130.477 30.4033L129.739 31.079ZM129.508 30.827L130.246 30.1513L130.231 30.1353L130.216 30.1199L129.508 30.827ZM128.941 30.596L128.939 31.596H128.941V30.596ZM118.126 30.575L118.128 29.575H118.126V30.575ZM117.559 30.827L118.267 31.5341L118.282 31.5187L118.297 31.5027L117.559 30.827ZM117.559 49.874L116.822 50.5497L116.837 50.5657L116.852 50.5811L117.559 49.874ZM129.508 49.874L130.216 50.5811L130.231 50.5657L130.246 50.5497L129.508 49.874ZM129.508 48.698L130.272 48.0521L130.231 48.0037L130.184 47.9608L129.508 48.698ZM129.256 48.467L129.932 47.7298L129.645 47.467H129.256V48.467ZM126.988 40.907L126.281 40.1999L126.266 40.2153L126.251 40.2313L126.988 40.907ZM126.988 39.773L126.251 40.4487L126.266 40.4647L126.281 40.4801L126.988 39.773ZM120.373 39.521V38.521H119.373V39.521H120.373ZM120.373 41.159H119.373V42.159H120.373V41.159ZM126.757 41.159V42.159H127.197L127.495 41.8347L126.757 41.159ZM119.945 48.467V32.213H117.945V48.467H119.945ZM118.943 33.213L128.939 33.234L128.944 31.234L118.948 31.213L118.943 33.213ZM128.941 33.234C129.422 33.234 129.868 33.0575 130.216 32.7101L128.801 31.2959C128.812 31.2851 128.837 31.2653 128.874 31.2502C128.91 31.2353 128.937 31.234 128.941 31.234V33.234ZM130.216 32.7101C130.575 32.3502 130.739 31.8911 130.739 31.415H128.739C128.739 31.425 128.738 31.4075 128.751 31.3748C128.764 31.3405 128.784 31.3127 128.801 31.2959L130.216 32.7101ZM130.739 31.415V31.079H128.739V31.415H130.739ZM130.477 30.4033L130.246 30.1513L128.771 31.5027L129.002 31.7547L130.477 30.4033ZM130.216 30.1199C129.868 29.7725 129.422 29.596 128.941 29.596V31.596C128.937 31.596 128.91 31.5947 128.874 31.5798C128.837 31.5647 128.812 31.5449 128.801 31.5341L130.216 30.1199ZM128.943 29.596L118.128 29.575L118.124 31.575L128.939 31.596L128.943 29.596ZM118.126 29.575C117.617 29.575 117.162 29.7807 116.822 30.1513L118.297 31.5027C118.29 31.5096 118.266 31.5326 118.223 31.5518C118.179 31.5712 118.143 31.575 118.126 31.575V29.575ZM116.852 30.1199C116.505 30.4673 116.328 30.9132 116.328 31.394H118.328C118.328 31.3987 118.327 31.425 118.312 31.4615C118.297 31.4986 118.277 31.5233 118.267 31.5341L116.852 30.1199ZM116.328 31.394V49.286H118.328V31.394H116.328ZM116.328 49.286C116.328 49.765 116.502 50.2009 116.822 50.5497L118.297 49.1983C118.296 49.1974 118.307 49.2099 118.317 49.2353C118.327 49.2611 118.328 49.2809 118.328 49.286H116.328ZM116.852 50.5811C117.2 50.9285 117.646 51.105 118.126 51.105V49.105C118.131 49.105 118.157 49.1063 118.194 49.1212C118.231 49.1363 118.256 49.1561 118.267 49.1669L116.852 50.5811ZM118.126 51.105H128.941V49.105H118.126V51.105ZM128.941 51.105C129.422 51.105 129.868 50.9285 130.216 50.5811L128.801 49.1669C128.812 49.1561 128.837 49.1363 128.874 49.1212C128.91 49.1063 128.937 49.105 128.941 49.105V51.105ZM130.246 50.5497C130.565 50.2009 130.739 49.765 130.739 49.286H128.739C128.739 49.2809 128.741 49.2611 128.751 49.2353C128.761 49.2099 128.772 49.1974 128.771 49.1983L130.246 50.5497ZM130.739 49.286C130.739 48.8076 130.557 48.3887 130.272 48.0521L128.745 49.3439C128.76 49.3622 128.757 49.3636 128.751 49.3472C128.748 49.3392 128.745 49.3291 128.742 49.3175C128.74 49.3058 128.739 49.295 128.739 49.286H130.739ZM130.184 47.9608L129.932 47.7298L128.581 49.2042L128.833 49.4352L130.184 47.9608ZM129.256 47.467H118.945V49.467H129.256V47.467ZM127.696 41.6141C128.043 41.2667 128.219 40.8208 128.219 40.34H126.219C126.219 40.3353 126.221 40.309 126.236 40.2725C126.251 40.2354 126.27 40.2107 126.281 40.1999L127.696 41.6141ZM128.219 40.34C128.219 39.8592 128.043 39.4133 127.696 39.0659L126.281 40.4801C126.27 40.4693 126.251 40.4446 126.236 40.4075C126.221 40.371 126.219 40.3447 126.219 40.34H128.219ZM127.726 39.0973C127.386 38.7267 126.931 38.521 126.421 38.521V40.521C126.405 40.521 126.369 40.5172 126.325 40.4978C126.282 40.4786 126.258 40.4556 126.251 40.4487L127.726 39.0973ZM126.421 38.521H120.373V40.521H126.421V38.521ZM119.373 39.521V41.159H121.373V39.521H119.373ZM120.373 42.159H126.757V40.159H120.373V42.159ZM127.495 41.8347L127.726 41.5827L126.251 40.2313L126.02 40.4833L127.495 41.8347Z"
                fill="#ffffff"
              />
            </g>
            <path
              id="stroke"
              className={classes.stroke}
              d="M147 5L132 75"
              stroke="#51bd7a"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              id="poly1"
              className={classes.poly1}
              d="M25 53L3.25891 41.2598C1.85931 40.504 1.8593 38.496 3.25891 37.7402L25 26"
              stroke="#51bd7a"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              id="poly2"
              className={classes.poly2}
              d="M151 26L172.741 37.7402C174.141 38.496 174.141 40.504 172.741 41.2598L151 53"
              stroke="#51bd7a"
              stroke-width="3"
              stroke-linecap="round"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default MainLogo;