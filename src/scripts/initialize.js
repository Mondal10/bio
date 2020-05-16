import { loading } from "./loading";
import { data } from "./globalVariables";

export const initialize = () => {
  loading();

  setTimeout(function () {
    function initIdentityResults(i) {
      const messageDiv = document.querySelector('#message');
      messageDiv.classList.add('cursor');
      messageDiv.innerText = data.message.substring(0, i);

      if (i < data.message.length) {
        setTimeout(function () {
          initIdentityResults(i + 1);
        }, 35);
      } else {
        messageDiv.classList.remove('cursor');

        const loadingResume = () => {
          const loadingMessage2 = document.querySelector('#loadingMessage2');
          loadingMessage2.style.display = 'block';

          const dotAlpha = document.querySelector('#alpha-loading');

          const loadingAlpha = setInterval(function () {
            if (dotAlpha.innerHTML.length == 6) {
              dotAlpha.innerHTML = '';
            } else {
              dotAlpha.innerHTML += '.';
              setTimeout(function () {
                clearInterval(loadingAlpha);
                loadingMessage2.style.display = 'none';
              }, 2000);
            }
          }, 350);  // Dot Speed
        }

        loadingResume();

        function initName(i) {
          const nameDiv = document.querySelector('#name');
          nameDiv.classList.add('cursor');
          nameDiv.innerText = data.name.substring(0, i)

          if (i < data.name.length) {
            setTimeout(function () {
              initName(i + 1);
            }, 35);
          } else {
            nameDiv.classList.remove('cursor');
            setTimeout(function () {
              initAlias(0);
            }, 1500);
          }
        }
        setTimeout(function () {
          initName(0);
        }, 2500);
      }

      function initAlias(i) {
        const aliasDiv = document.querySelector('#alias');
        aliasDiv.classList.add('cursor');
        aliasDiv.innerText = data.alias.substring(0, i);

        if (i < data.alias.length) {
          setTimeout(function () {
            initAlias(i + 1);
          }, 35);
        } else {
          aliasDiv.classList.remove('cursor');
          setTimeout(function () {
            initOccupation(0);
          }, 1500);
        }
      }
      function initOccupation(i) {
        const occupationDiv = document.querySelector('#occupation');
        occupationDiv.classList.add('cursor');
        occupationDiv.innerText = data.occupation.substring(0, i);

        if (i < data.occupation.length) {
          setTimeout(function () {
            initOccupation(i + 1);
          }, 35);
        } else {
          occupationDiv.classList.remove('cursor');
          setTimeout(function () {
            initFrontEnd(0);
          }, 1500);
        }
      }

      function initFrontEnd(i) {
        const frontEndDiv = document.querySelector('#front-end');
        frontEndDiv.classList.add('cursor');
        frontEndDiv.innerText = data.frontEnd.substring(0, i);

        if (i < data.frontEnd.length) {
          setTimeout(function () {
            initFrontEnd(i + 1);
          }, 35);
        } else {
          frontEndDiv.classList.remove('cursor');
          setTimeout(function () {
            initJSFrameworks(0);
          }, 1500);
        }
      }

      function initJSFrameworks(i) {
        const jsFrameworksDiv = document.querySelector('#js-frameworks');
        jsFrameworksDiv.classList.add('cursor');
        jsFrameworksDiv.innerText = data.JSFrameworks.substring(0, i);

        if (i < data.JSFrameworks.length) {
          setTimeout(function () {
            initJSFrameworks(i + 1);
          }, 35);
        } else {
          jsFrameworksDiv.classList.remove('cursor');
          setTimeout(function () {
            initModuleBundler(0);
          }, 1500);
        }
      }

      function initModuleBundler(i) {
        const moduleBundlerDiv = document.querySelector('#module-bundler');
        moduleBundlerDiv.classList.add('cursor');
        moduleBundlerDiv.innerText = data.moduleBundler.substring(0, i);

        if (i < data.moduleBundler.length) {
          setTimeout(function () {
            initModuleBundler(i + 1);
          }, 35);
        } else {
          moduleBundlerDiv.classList.remove('cursor');
          setTimeout(function () {
            initCSSFrameworks(0);
          }, 1500);
        }
      }

      function initCSSFrameworks(i) {
        const cssFrameworksDiv = document.querySelector('#css-frameworks');
        cssFrameworksDiv.classList.add('cursor');
        cssFrameworksDiv.innerText = data.CSSFrameworks.substring(0, i);

        if (i < 1) {
          smoothScroll(cssFrameworksDiv);
        }

        if (i < data.CSSFrameworks.length) {
          setTimeout(function () {
            initCSSFrameworks(i + 1);
          }, 35);
        } else {
          cssFrameworksDiv.classList.remove('cursor');
          setTimeout(function () {
            initCSSPre(0);
          }, 1500);
        }
      }

      function initCSSPre(i) {
        const cssPreDiv = document.querySelector('#css-pre');
        cssPreDiv.classList.add('cursor');
        cssPreDiv.innerText = data.CSSPre.substring(0, i);

        if (i < 1) {
          smoothScroll(cssPreDiv);
        }

        if (i < data.CSSPre.length) {
          setTimeout(function () {
            initCSSPre(i + 1);
          }, 35);
        } else {
          cssPreDiv.classList.remove('cursor');
          setTimeout(function () {
            initBackEnd(0);
          }, 1500);
        }
      }

      function initBackEnd(i) {
        const backEndDiv = document.querySelector('#back-end');
        backEndDiv.classList.add('cursor');
        backEndDiv.innerText = data.backEnd.substring(0, i);

        if (i < 1) {
          smoothScroll(backEndDiv);
        }

        if (i < data.backEnd.length) {
          setTimeout(function () {
            initBackEnd(i + 1);
          }, 35);
        } else {
          backEndDiv.classList.remove('cursor');
          setTimeout(function () {
            initNodeFrameworks(0);
          }, 1500);
        }
      }

      function initNodeFrameworks(i) {
        const nodeFrameworkDiv = document.querySelector('#node-frameworks');
        nodeFrameworkDiv.classList.add('cursor');
        nodeFrameworkDiv.innerText = data.NodeFrameworks.substring(0, i);

        if (i < 1) {
          smoothScroll(nodeFrameworkDiv);
        }

        if (i < data.NodeFrameworks.length) {
          setTimeout(function () {
            initNodeFrameworks(i + 1);
          }, 35);
        } else {
          nodeFrameworkDiv.classList.remove('cursor');
          setTimeout(function () {
            initDatabase(0);
          }, 1500);
        }
      }

      function initDatabase(i) {
        const dbmsDiv = document.querySelector('#database-management');
        dbmsDiv.classList.add('cursor');
        dbmsDiv.innerText = data.databaseManagement.substring(0, i);

        if (i < 1) {
          smoothScroll(dbmsDiv);
        }

        if (i < data.databaseManagement.length) {
          setTimeout(function () {
            initDatabase(i + 1);
          }, 35);
        } else {
          dbmsDiv.classList.remove('cursor');
          setTimeout(function () {
            initDataFetching(0);
          }, 1500);
        }
      }

      function initDataFetching(i) {
        const datafetchDiv = document.querySelector('#data-fetch');
        datafetchDiv.classList.add('cursor');
        datafetchDiv.innerText = data.dataFetch.substring(0, i);

        if (i < 1) {
          smoothScroll(datafetchDiv);
        }

        if (i < data.dataFetch.length) {
          setTimeout(function () {
            initDataFetching(i + 1);
          }, 35);
        } else {
          datafetchDiv.classList.remove('cursor');
        }
      }
    }

    function initProgramAlpha(i) {
      const greetingDiv = document.querySelector('#greeting');
      greetingDiv.classList.add('cursor');
      greetingDiv.innerText = data.greeting.substring(0, i);
      if (i < data.greeting.length) {
        setTimeout(function () {
          initProgramAlpha(i + 1);
        }, 35);
      } else {
        greetingDiv.classList.remove("cursor");
        initIdentityResults(0);
      }
    }
    initProgramAlpha(0)
  }, 1500);

  function smoothScroll(element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}