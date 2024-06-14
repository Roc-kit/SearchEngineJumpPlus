const seofavicons = {
    "ahrefs": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAkVJREFUaEPtmc9RWzEQhz85HLhBKoipAEqADkwF0EF8A06YS2yfoISkAoYK4g7iDmJXEB/hAAsrbM/Lw36S9ceOM08znvGMnqTft9q3u9IzbHkzW66f/x9Aesgmd8lcVhvZuQM1QOT21TtQu1DtQnUU2vI8EOnClcN9AkR0GK0BKixQ7wBsthqtdyDVDkiXJsIRO3zhmQMMe0Cz4P77gP5mrdhXGSeyRCHpcgy0MBwCRyVxSQNXMgBr5QZnCO2cgsv0SQCkz/W6hc9AogCkwz67/Jy6SVLX8J0sDqDHr02KV8hggKnbdHwtleu5cIAev0uhMIXGCTDCMOKFMYavrkmDAKRPC+HeNfmC/neBMEQY2/8NJrww5ImJ6aD985YtE0uPO3BbZ6pkgPADGJgrK9675QTQyKPJqqpNEE7NFQNvxaUHcwL8cSYrw7m5sJYPbjkB3NeJj3wu+/SqJBsFcEUHF4ytp4xNkpXNtc7Cu9EUllmmair82uMds1P8MwCrCp8ZIBsAwolPBAoVnh9Ak9UjJ8te5FjhsQC+ZcQI4cFmXm2f2EM4tr+/T2Cud3Vpf6gLaRnRCl414cAwgD5thNuEOoKnCgN4P8ioGxUP4sEiYgYGAeiC8o02jay7oDWUq94KywMzi70d5L9jOIux4IKxWr3eaAhOkTB9vlKuUlpXsc6Fzw3k8Qk32IWKSqTLOQZN/94XUoXxH4SvHaDgUsULLYUpA+mBRk9dQxoMeeah6pCzFhdK7P/Jp3O+A8lXTDzh1gO8AgqT5DHLyhfTAAAAAElFTkSuQmCC",
    "google": "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='48px' height='48px' viewBox='0 0 48 48' enable-background='new 0 0 48 48' xml:space='preserve'%3E%3Cpath fill='%23FFC107' d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'/%3E%3Cpath fill='%23FF3D00' d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'/%3E%3Cpath fill='%234CAF50' d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'/%3E%3Cpath fill='%231976D2' d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'/%3E%3C/svg%3E%0A",
    "whois": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABX1JREFUWEetl2tsFFUUx/9ntkvZmW15ichDYwANqJBgQZjZJgIhRtJIgg8SfEYkJqJUBdnZgpGVJt2dhWBAfCT4wReaFFFJEIKG2GB31hKBCgkYQsAHoBKphe7MwrIzx86yrdt9kXY5H+89939+98y9554hDNAMTW4CqAFAJ8D/AsI5gI8R6AiRfTRhJ9uHBw5evJ48Xc+h0DwzyIwoRwDcU2J9ioEYgG8EWNtEte1MId8+ABysEQ2x8k6vX28vBdYVUuYKAvb1A94CsJcJm7x+/dvsdb0AHeGaIZVU2coMzRvQPy0lboR9X4J4YT8A/nclWiP5o009A70Ahqas7R4MWhZPrl4d+6WYeCI063ZbEE4CcA0IAIBtC3OqGlpbnPVpAA5CMD3KKQBDxYQ+nIKwi4mbEUVjhn+gwdPrmL6SAtGHewGMsFIHwi4ibhH9sTnFxHmj7DGv0h8ARpQFACQtKzWmevWBC+kMGJr8IUDPECEi+nW1mLgR8S0F89Yyg2eW0wuSGn2fMlfqLIDRRLxI9Me2FwXQlEMApt0AgPMEahTV6BaKr585lWzXz46oyxYmDG5odc5CnpmRWT5mobX84PzRZY9dP6K+7VL6DGSltUP06zcRgQsD+LYx8+PlADDwuZTQn8w+5GRo8tsAveQUCknVHywUIB6ZcQux+zcAg8oAuJhy8/ghK2Id2RpkhH3fgXgeGE1SQF9TKIARUV4Ho7GM4CCiDaI/uipXw6npx5kxCeCFkhr7OteBg7MrTE/yNIBx5QDYsO+qUn88ngdgaMo/zr2miorbxJX7nTvex8yI8ggzvignOAP7vap+f562NnMcmZpyiUGGpEZHFz588vfMNLtMgKe9qv5J/ubkl8nQFAPE+yR/bEGuQ1fYd7dAfLSnZOelD+hiQgQ2DhNQxcQ+gJ4AMCzL94Lo5ltpRSyRvb5LmzVZYFfAATABaJKqv5kbwNCUdwAsK7H7FyVVfzd7vjNUO8ztsveCMePaOIckNba6gHYzwCcdgL9AtETyR3dnO/H6qVLC9v7JQFURgFTKzaNyr5Xja4SVzSAsB3CVYI3PbUbiYXkKETk9x3IyIvJPfNWu865p+zs7UDwiP0hMe4rtnoB9oqrPy52/sHlm9eCE6wSAUU7h8ap6XvEyNGUXgDqwsIBMTY6Iaizvec3q+QoyMFDwYMU1ZRMB9QBSlsVTcnsLMywrTBR1RC3QJDJC8jSpIXY4/xvJOwBKv9kFrFN085jcg2WEamsg2G2ZZmWrpOrP9/mszY+5zNNnDwC4F0BcTOhDijalhqb8AKC2YHiitZI/ui5P/NczbWCqAWACdIekRs/1+ayaspKADdfGKCqp0dqiAHFNaSEgr3h034rzJmjiSDXalS1uako9A5sy4o2SGn0je/5ySJ5oCWgHSMrcji2SGlteKgNO47E0LwOMZVJAf69P8I3yWE7SMRCqARwSE50yBY8le3x48/xKM3FRz6T+2v4Jj4p+fUfxDESUB4ixty8A7xH9sbrcJ9vUlI8ZeArA74JQMduzar/zdvRagXqSSg4aNHLYqy2dRQHSndJ6eSeYHsooHbrCV+YW+ttxHjQwzpILz3le051nu9dMTX6FQW/lZHK3pOp16UwUPuSZr+Q0oUkEmGiobaXWOU1kKf/cOSMiLwHTBzlxUszCdG+gNd2FDejX7HoQTva635hVRAgBELL8k8z8rDcQ+6xn7IYDXA7VjrcEawtA87MCxwHeYVkI5xamfgMYmm96d6FpZHAzUtZup4RfarpvhMvl9jF4MQFO8XJat04ALUTc7DGTOyl40Hn08qxfAImwr9YmXgzCWDBuBnG6R2SmODF1EPEpJj4By3VQnDC6nRZtd35KS9p/mKVKVRR2OJ0AAAAASUVORK5CYII=",
    "similarsites": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAa5JREFUOE+Fk70vBGEQxp9ZilNcoRFXiYb11VgUEsnpFBKNUilhHZ0VH7UQp1y3ErV/gEbnQkiE0/i6vUJQEBqFyCnEyKx7N6+9O95q39lnfjM78ywhcpLJ/Vg2O/ihwpOz3GAQuo1a3LkrlI/qSQUk8e3Rv8sVJhtVLOXwIoBlLemdgdFMmvZULARYrV4RhNtc3u6QlwLs6E0WoxXlTsCqm6aF0jNgtXi7IAyDcK0AM3Pc98U4qQQIEgm2u0ab1NPmdfIXLpQw59thVymHuRpA4len2TqyWr0tAONKaABjp769Lff/ugCwRJbpXYHRrleKJ8w6tYnpBTb5EzcVO2EcSwcyqFhE8BFPmPUKUhroPYCGiO5dANW/s8Zoyl1PPGhrfY5ABJC5Bai56rA0iJiqhiAQdfyyIZaBmJ5/mWuWj0DoL+k2qLslM0BEB3+tiwx0nd3Yl6KZdniFgfnAC7VoC3ZeaRM6UAekHHYBpIiw467RSAAI/oOn/GuFbQSciLlkBq8baTJDK6tqoaW18nr1KYeHjB8LjyhJaFu9ZZmL3M8LU4d6XLawuU4veuwbWC2lMAaSUWkAAAAASUVORK5CYII=",
    "similarweb": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABG9JREFUWEell3+IVFUUxz9nZtPVRKECY2c2FTSSUDLbWVMDlaTMIJrZRUFEitJ2djMTjf4oCv8pycC03U2jhEKEZnYVjFbKymJznR0Xy7JMF5F8u2BCpun+cuadfE8d5719szuzc/57753zvZ973z3n3CsUYVrPQwjrERai3AtcAv4EfsBkt9RxYjh5GcohEHr2bhHfhpL+9OazP+/7N9tXG6gFtgIlOTRMYDd+3pA1/JVrnJwAgVD1UtBPEG3pSjQ95xi8noUI3wJDTuBmzGXgBYkS84LwFAiGqjeCvgv4QMJGe2yva/atwLzhltf1fbNEed0dMwigvKLqTRU23XJUMcu7Es1G5nkb4ynh4g24Ak15X2rZkB3lAAhUVq8U1c+yHSam7xrV0bHzWgZgOzPwc7zAobPdX5WovXdsywCUzY484PNLBzDWIe6XsUZbrDcLYAp+zhQBMICPkLzELw6AYKj6O9CFbmEzrdO7O5pOuvaABTClCIgj1DBXBLVXoKwi/LhPfN94CarImq5EbKcrC15EcLwrGEYISw17bYBARdXXIiz2FpEjRnvsUQeAIjTyFfBkwQPfDmiVKI9J+bzlZXotdW6oXW2qubg72XzQAbGDCaQ4iPDIiCH8TJXyykitqnw4tIieMtMDs7o79vcMgkizD1gwIghlnQQqqvaIsDwPgT1Ge3wFoA6IbYymhEbAUS3z0LNyMC7BUNVvwIN5BShbjGR8o+dmbWAdsAXw56VlOSknLYD/rgeOyzdIlK3nkvH17pWw9T7iKUy75jtrSW7xqxaAY0nzAhGa+8fIqguHYlfc/lrPXMTOkAn5aFkAVpUrzcfZ8e/RP0R4xkg0nR4E0cgilBZg1HC6FoDVaALDOeb4flHFjHQlmr/3gKhD2T6M7t8WwGHAUWgKhOnDJGwcjVszzpjeKFbWmWFQeb/tRJsEKyJbEXmlwEHd7j2mqfO7jzYdc0A0MBs4mlNbaJBAqKpa4IsiAawcOFX6T8/Mzs6WfhdEGzDHU1+JyMSZK++8o7S3GxhfNITqaiPZ9LEDoJG3rpeutz20LzOGiXYzClZEdiCyumgAOGC0x5c4AOoJIzR5aDdKlKgNMGnOsulpM/1rQVXMm/a00R6/37UCC1DcWZJCmCY1nM2ciAKhSIMgNUWuwjGjPf6wC+BplP0u3fckymvWuwzA1MoV4/vM/tbryzVjpBCq7OpKxp93AaxF+SDr3Sn8zJI12J3VdSgNB0V9PwH3jQhCZYmRjB1wZcEeyHTbSwjzpQarAdo26Fg+ec7yySkz9WXeHfKWknLISMYXZTcp3UUpvZy/mWFXMFkqdfyYDeh5MbmZmu8A1p7IdfXK1jmBX54w2mJdrtlbZ4RPwb6ahSWKdep22JBXq0mh6ikp0VpRllnZ6vFbelRoHMPoTZ2J3dYVLGNazziE34HDpHhZ1nLB67fmc7ez44KVkWlqMsuH3KPCgCJnUn2lifPHP7/qJawNrMLEkDq7H+S0vAFGtCnzCPofsYSA2vJZvAUAAAAASUVORK5CYII=",
};

const searchEngineJumpPlusEngines = {
  web: [
    {
      name: "百度",
      url: "https://www.baidu.com/s?wd=%s&ie=utf-8",
      favicon:
        "data:image/svg+xml,%3Csvg t='1666880462710' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='36406' width='32' height='32'%3E%3Cpath d='M226.522 536.053c96.993-20.839 83.792-136.761 80.878-162.089-4.758-39.065-50.691-107.346-113.075-101.952-78.499 7.036-89.957 120.445-89.957 120.445C93.748 444.857 129.764 556.857 226.522 536.053zM329.512 737.61c-2.848 8.175-9.18 29.014-3.686 47.173 10.822 40.707 46.168 42.55 46.168 42.55l50.792 0L422.786 703.169 368.41 703.169C343.952 710.473 332.159 729.468 329.512 737.61zM406.537 341.666c53.572 0 96.859-61.646 96.859-137.9 0-76.12-43.287-137.767-96.859-137.767-53.472 0-96.892 61.646-96.892 137.767C309.645 280.019 353.065 341.666 406.537 341.666zM637.241 350.779c71.598 9.281 117.632-67.141 126.777-125.035 9.349-57.827-36.854-125.036-87.544-136.561-50.791-11.659-114.213 69.688-119.976 122.757C549.597 276.803 565.779 341.566 637.241 350.779zM812.666 691.174c0 0-110.761-85.701-175.425-178.305-87.645-136.593-212.177-81.011-253.822-11.558-41.478 69.452-106.106 113.375-115.286 125-9.314 11.458-133.813 78.666-106.173 201.423 27.64 122.69 124.7 120.345 124.7 120.345s71.53 7.036 154.519-11.524c83.021-18.428 154.484 4.59 154.484 4.59s193.919 64.929 246.988-60.072C895.655 756.037 812.666 691.174 812.666 691.174zM480.881 877.253 354.807 877.253c-54.443-10.855-76.12-48.044-78.867-54.343-2.68-6.433-18.125-36.317-9.951-87.109 23.52-76.12 90.627-81.614 90.627-81.614l67.107 0 0-82.485 57.157 0.871L480.88 877.253zM715.674 876.382l-145.07 0c-56.219-14.508-58.866-54.444-58.866-54.444L511.738 661.49l58.866-0.938 0 144.199c3.586 15.345 22.682 18.159 22.682 18.159l59.771 0L653.057 661.49l62.618 0L715.675 876.382zM921.051 448.006c0-27.708-23.018-111.13-108.385-111.13-85.501 0-96.925 78.732-96.925 134.382 0 53.136 4.489 127.313 110.695 124.935C932.677 593.846 921.051 475.881 921.051 448.006z' p-id='36407' fill='%23008bdd'%3E%3C/path%3E%3C/svg%3E",
    },
    {
      name: "Google",
      url: "https://www.google.com/search?q=%s&ie=utf-8&oe=utf-8",
      favicon:
        "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='48px' height='48px' viewBox='0 0 48 48' enable-background='new 0 0 48 48' xml:space='preserve'%3E%3Cpath fill='%23FFC107' d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'/%3E%3Cpath fill='%23FF3D00' d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'/%3E%3Cpath fill='%234CAF50' d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'/%3E%3Cpath fill='%231976D2' d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'/%3E%3C/svg%3E%0A",
      gbk: false,
    },
    {
      name: "必应",
      url: "https://www.bing.com/search?q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5ElEQVQ4jZ2Tv0sbYRyHX5Uzl8bLVNrSToUOHbr0T2gHqf1Baf8AvcUruNcpd5e75BK9H0Q9gptCogZKh6J2kWtDhkpxkmCwOIidijpYECoI5unQNo0QauwHnuUD78PL9/2+on9w0ItrWiSraiSNjER9w8NRTFUjuQvimhaJuKZ9ThaLJHyfGzMz3AxDRC6H7LooQYDi+50JApJhiJBVNVJ8nx7TZKhU4svhIYX1dW4XCsRsm4FstjOOg+K6fwXCMHiysMCfvKhUELp+OcHjcrkleL60hEil/l/wslKhxzAQuk6vaRLPZC5/g9dra5jVKvdnZ5FtG5FKIVkWSjeCB3NzvFpeBuD7yQnvd3YYW13lztQUsm1fLHhUKnE1n6e+v0973mxtIaXTJDKZLoY4Ps71yUneNhqt/uPuLrJlceUiwcP5ea5NTJCt1fh2fNzq321vI6XT/xacNZuUNzdpHBy0Dp41m1Tqde4Vi/RbVucZPG1bpPbU9vZ4triIlE7TZ5qdXyFmWdzyfYobG/w4PQXg69ERYysrKI6D0PXzu9Am+KAEAYrjELNthGEwVC5jVqvcDUOErv/6E45znlwOxfMQ8ujop2QYorguiueRcF16HQeRzSLl8wz87hXXPY/nkZye5icfi28JEi0cegAAAABJRU5ErkJggg==",
    },
    {
      name: "360",
      url: "https://www.so.com/s?ie=utf-8&q=%s",
      favicon:
        "data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB60lEQVR4nIWTvWtTURTAf+e+GpPWRFptmigIDhWELo5+DKLCMxZEJfVjEhTqok4O/geik2MdOuhUm4ogpTS6iNQoRV3sIOqQgpiX2NKEprH58B2HvMQEUnO3ezi/3/m4XKHD2fvywrCr1oirbvWPuh9XYs8znfIApPUSmR97KHAbaY8rVIBxx0487iz4ML4tsrrmCAxsVckTpRw7cbQ1ZgCiq2vLDViVSatAb8ZOSMZOiEttCFj0qh2Jzo8l2jqIJOM3BJmowxJ3Tk8/61Q9koxPCnINwHXN/mzsaRrACDzwcl5vBQM49sx1VDcARNxHLSNIqG51b/5vfgAVuV/vm+NtOwAI6sb3rgKVhTqP75+gpvTlK2SswM5ughoa9a9XQdGmYKK0pF9CKZYqi7e6CT5XF+5+63vLlcKP5UZMirODUz1GLgFsL2pQLv4qdoLLc7sPKeYTQEnN1YFR5wmA6DS+8o5wuT6jbmLMwUAsm26Ff8+GT4nhFYBCPnAm19/sAKD0InzY9JBqEspPRd8g+FE5IULIg93NcnmXz+c7aYnMqOqUAeg9m3unRofVe2eEPSJyWZBzDRjVtN+SUP/5Qt4S2efVP9D2aQBKc4PHBO6IyohCVeA9uPf8oytfW/PWk0PhoJ3NdVt81/MXwby4bACYqGIAAAAASUVORK5CYII=",
    },
    {
      name: "yahoo",
      url: "https://search.yahoo.com/search;?p=%s",
      favicon:
        "data:image/svg+xml,%3Csvg t='1666872979419' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='13466' width='32' height='32'%3E%3Cpath d='M513.216 69.568C332.224 69.568 161.216 45.76 0 0v1024c161.408-45.824 332.416-69.632 513.216-69.632 178.816 0 349.376 23.232 510.784 69.632V0c-161.408 46.4-331.776 69.568-510.784 69.568z m283.584 87.424l-6.208 9.792c-5.824 9.216-11.008 17.024-18.176 28.032-9.6 14.4-27.584 43.008-49.216 79.808-6.016 10.176-13.376 22.4-20.992 35.584l-44.032 74.368-16.384 28.608-43.392 75.584c-14.592 25.792-28.992 51.2-43.392 76.416v25.408c0 35.2 0.768 73.6 1.984 107.776 0.576 15.616 1.216 43.392 1.984 72.768 0.768 35.008 1.6 71.232 2.624 89.6l0.192 5.632v0.576l-6.016-1.6-6.976-1.792a197.952 197.952 0 0 0-22.592-3.584 172.224 172.224 0 0 0-28.416 0 195.712 195.712 0 0 0-29.568 5.376l-6.016 1.6v-0.576l0.192-5.632c0.832-18.176 1.792-54.592 2.624-89.6 0.576-29.376 1.408-57.216 1.984-72.768a2721.92 2721.92 0 0 0 1.984-107.776v-25.408L425.6 488.768c-14.208-25.024-28.992-50.624-43.2-75.584-5.632-9.6-11.008-19.2-16.384-28.608-12.8-22.208-29.376-49.984-44.032-74.368a2038.784 2038.784 0 0 1-20.992-35.584 1986.112 1986.112 0 0 0-49.216-79.808c-7.168-11.008-12.416-18.816-18.176-28.032l-6.208-9.792 11.2 3.2c14.208 4.032 28.8 6.016 44.416 6.016s30.592-1.984 44.608-6.016l3.392-1.024 1.792 3.008c27.584 49.792 101.824 171.776 146.176 244.8 15.168 25.216 27.392 44.992 33.408 55.168v-0.192 0.192l33.408-55.168c44.416-72.832 118.592-194.816 146.176-244.8l1.792-3.008 3.392 1.024c14.016 4.032 28.992 6.016 44.608 6.016s30.208-1.984 44.416-6.016l10.624-3.2z' p-id='13467' fill='%234C07A2'%3E%3C/path%3E%3C/svg%3E",
    },
    {
      name: "搜狗",
      url: "https://www.sogou.com/web?query=%s",
      favicon:
        "data:image/svg+xml,%3Csvg t='1666872860655' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='11496' width='32' height='32'%3E%3Cpath d='M716.8 0c169.664 0 307.2 137.536 307.2 307.2v409.6c0 169.664-137.536 307.2-307.2 307.2H307.2C137.536 1024 0 886.464 0 716.8V307.2C0 137.536 137.536 0 307.2 0h409.6z m91.904 305.536c-18.304-22.016-176.1792-92.8384-333.8496-87.6672-157.6704 5.1712-277.568 84.3904-277.568 155.6864 0 71.3088 22.5408 161.3824 277.568 192.5632 221.4912 30.336 114.3424 113.8944 0 113.8944s-180.0832-41.1776-228.8256-41.1776c-48.7424 0-81.856 42.3808-21.2224 96.5888 55.36 49.4976 158.6304 62.1056 252.8512 69.568C571.8784 812.4544 832 794.88 832 638.8352c0-152.9088-205.8624-196.3776-294.5024-206.0416-88.6272-9.6768-131.1232-44.0064-131.1232-59.2384 0-15.5264 37.5552-54.0544 123.2512-44.096 85.696 9.9584 182.6304 44.096 221.696 44.096 39.0784 0 75.6992-46.0032 57.3824-68.0192z' fill='%23FF7D2A' p-id='11497'%3E%3C/path%3E%3C/svg%3E",
    },
    {
      name: "Startpage",
      url: "https://www.startpage.com/sp/search$post$query",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA9ElEQVR4nO2WTUoDQRBGX5txIMRs/EFBAm49iEfxBN5J8AAeZwwkgmTR6e6ZHsNMDO2iFkEyibqQcVG1+aq74KvXteky9w8p0WMc9dlcARRAARRAARTgXwBk+z5jYyA/3p7zvDv/Ltp2N2/XoilBNj4Rw6sLuDyXwuRa9OxUdDz6ajoc/hwAYLUSrertnV2KmpT6XUiyvzBtGplxjPLksooA+FAB4HzZDdA0a2Ksmb2+4XzJYmFxPlBM51jr8aHCLgPOBQDqd5ntx2ZzECgbDPbWzOPTcyqmM5wvKV7mOw26zA8Z/jbMze2dLqUKoAAKoAC9xic+GmK9S0OJvAAAAABJRU5ErkJggg==",
    },
    {
      name: "Yandex",
      url: "https://yandex.com/search/?text=%s",
      favicon:
        "data:image/svg+xml,%3Csvg t='1666872628734' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='10516' width='200' height='200'%3E%3Cpath d='M451 1024V691.8L229 96h111.6l163.6 459.4L692.4 0h102.6L553.6 695.6V1024h-102.6z' p-id='10517' fill='%23FC401D'%3E%3C/path%3E%3C/svg%3E",
    },
    {
      name: "DDG",
      url: "https://duckduckgo.com/?q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADiElEQVQ4jXWTfVDTBRjHn+uyi8KAbWz7/TbeNzeUeNkLCljGS3hrspDUsC7vqivz5cI/OtQ7vSxNrpvdkQx0k10M5FYgztECgfOoM7kurs6IFx1ja7xsgMiLAySDffvDtLrs8/fz+T7PH8+X6BFIQymxOGb1WyWy8COH13LL9svCSgtEoTt4RMyj5h/CIRKfSImsMKu4NrOKZ6vZwDafz2Tbajaw9ur1wibzemHj+7Lwo0S06j9yYtgqRX0m216lFDS0FCR3Obcl3/FvFmJCFwt/0Rr0aOPGrVlsuymduVShEljDiCL+3hxCUbWZTLtBwfuqXyeZCThqsTTUj0BrPUZ2psGTE4mxQilmt8twLT/WVaUSXvgsjW8hoseJiOhYUuTpSqWw8YYmPjC6JQ5TtXqsLAYAAMu3fLj9eSk8eQw8OimmXpGjMzfWaU5nv94RvfodkoQ+se6cmm2+tDGqe1Ijxm+HXsd4IIi5+WUAQBDA6MRdePdq4c4Xw12wBlNFifginW0tTxN8Sa9Gh+02qlh7v0ayOJTNh8d4Ev7AMq4P+BAM3g/4rm8KvdVn4H6exWCOHMMaOTqzY1wGJXORDkg5H1ermZYRnQyubCEG9R/Av7CCsnOd+P3eCgCg68YCbnZ0YGyXCLf0AowfjML1PMm8UcHaqVTOO1WjFnWMFMjgyhWjZ48OC3/cPx9YRnD6POArAoZSsfT9k7jTEIHR/THoyZXerVYzLfReQvjRs0qRw7NFBmd+HH4pTMXk6Mhf/jTg4WDGRBjex4f33Th43ojHoEaG7nzJXKWSsdHLwmd2VSmE9h9flMwNaqT4NSca3mudeMCs4xDGj4fgdiUfc1YOJssF8OpkcGTF9FUomIvEIRIb0li7RSX+dqxAjt6NAgxYDA8Dpq116E+JhHdzPJxaKfpyZBjWymFQsPZPkvgWIiLancA9Up7C2K5sivd6XxCh98MS+JYmMDzvxqJ7AN2FctSVKtC9dS18LyWiXh3dZVKK257jPaV98IxPn0oWNpYlCera1cxN/55itLpt2H45A3uvbMObjiy89pMWP7ydioZk0dXyFNZWIuGW/asLoUR8fZLQenod325MlzsuXLVMHnMeRIXrLC67G4OHP8roPZ4hajI9y7YdSOB9+n+FfKw4KmLfSUlEbdPOvJ9dJv3sUnMTZmqM9yypsd+ckHLNm7ghW/8p/Alp3+8i87OHIgAAAABJRU5ErkJggg==",
    },
  ],
  translate: [
    {
      name: "百度翻译",
      url: "https://fanyi.baidu.com/#auto/zh/%s",
      favicon:
        "data:image/svg+xml,%3Csvg t='1666877034366' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='29943' width='32' height='32'%3E%3Cpath d='M938.666667 981.333333c-17.066667 0-29.866667-8.533333-38.4-25.6l-59.733334-119.466666h-277.333333l-59.733333 119.466666c-8.533333 21.333333-34.133333 29.866667-55.466667 17.066667-25.6-8.533333-34.133333-34.133333-21.333333-51.2l72.533333-140.8 145.066667-290.133333c12.8-21.333333 34.133333-38.4 59.733333-38.4s46.933333 12.8 59.733333 38.4l145.066667 290.133333 72.533333 140.8c8.533333 21.333333 0 46.933333-17.066666 55.466667-12.8 4.266667-17.066667 4.266667-25.6 4.266666z m-332.8-226.133333h192l-98.133334-192-93.866666 192zM85.333333 844.8c-17.066667 0-29.866667-8.533333-38.4-25.6-8.533333-21.333333 0-46.933333 21.333334-55.466667 93.866667-46.933333 179.2-110.933333 247.466666-187.733333-46.933333-64-85.333333-128-110.933333-192-8.533333-21.333333 4.266667-46.933333 25.6-55.466667 21.333333-8.533333 46.933333 4.266667 55.466667 25.6 21.333333 51.2 46.933333 102.4 81.066666 149.333334 59.733333-85.333333 102.4-179.2 128-281.6H85.333333c-25.6 0-42.666667-17.066667-42.666666-42.666667s17.066667-42.666667 42.666666-42.666667h243.2V85.333333c0-25.6 17.066667-42.666667 42.666667-42.666666s42.666667 17.066667 42.666667 42.666666v51.2h238.933333c25.6 0 42.666667 17.066667 42.666667 42.666667s-17.066667 42.666667-42.666667 42.666667h-68.266667c-25.6 128-85.333333 247.466667-162.133333 349.866666l25.6 25.6c17.066667 17.066667 17.066667 42.666667 0 59.733334-17.066667 17.066667-42.666667 17.066667-59.733333 0l-17.066667-17.066667c-72.533333 81.066667-162.133333 149.333333-264.533333 200.533333-8.533333 0-17.066667 4.266667-21.333334 4.266667z' p-id='29944' fill='%231296db'%3E%3C/path%3E%3C/svg%3E",
    },
    {
      name: "谷歌翻译",
      url: "https://translate.google.com/?q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC/UlEQVQ4jYWTT0ybdRyH34MH4wVjovG2ZIl60IMXNTgoDtlG/wAy49bt4r+8XSFm2SZGox6WWNnal45SbKAbygKbShAT38yMNC9LMGyQsS5OdGtpOwqNvNkLLbwv76+KJns8lES9jG/yXJ98kidf6bGn6vY42tWEo/2SVutXtZotHEcT2o5q33vSdlfbpk68OQSH4uCNw8F+ONAPhwbhlQ9mbkuS9NADBY72S1e8cXg9ItgfEbR2bxH5k5aw+PuRJ5994YGCGr+qeePQ2i1whQRuReAMCZq6BC0992k6+nVCfuetE7J8pEOW5Q6fz/e+LMsdbW1tH7pcrgNSjV/V3uiD5rAgNr7BzB2TyzdM3u63aThVxjcgSGcKCNvCtm0sy8I0TWzbZm1tDellv6o1RSE2bpGcX+fjbzcIjG1w+AvBvqDApQhGxlMsZNOsrhgY9+6h6zq6rmNZFlL1EVVr7oXrKZOOCzbeXpvLSZPxpIl81sYR+IPPLi6RufMr0aERpm/ewiwV0fXlyoJqn6p5eiBx02RgwmJfUBBSLQr6Ov4vbeo7NzkYXiZ6foxPzvQRHvyGyPAo/SM/kM0vVQTNUfCds5lNrzM5ZzKT+lfmCpVxKwLl/E9cvXaNxORVOuNDpLM5VovFimB/DPaeFnh7BSe/2+D4sE1jsFLDrQj2hjY53jdHOP4VysAFrkxNoy//TqlUQnrRp2qtMfB0CRqDgvrPBQ2dW0lDNq5QpYbcV+IjJc6xUz2kUmmWFhcxDAOp2p+YqgjKeLrKuJXKZNcWzpCNMyioD6wTvTjFqPojp88NM/fbbVYMA+kZd6C7JQaeHvBEwNN9H/d/cHZt0qiUcXT+RXB0maVcmu/HNSanr7OyYiBJkvTwozt27a7aufvVqp21/+Pxp+uddd6xhYZ3b7Dr8BRnBn8ml02zcDdHLpdF13W2fbbnX2o/W/faBJ8GJpi79QvpdIr5+XkymQzF4ur2gqonnttzUkmSSmXJ5++Szy9SKBQwDIPZ2eTaP/p6Y/2tPjpQAAAAAElFTkSuQmCC",
    },
    {
      name: "有道词典",
      url: "https://dict.youdao.com/search?q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA2ElEQVQ4jWNgGFQggps34Y2i2v83imr/78gpvZdgYFBgYGBg8OXkCUMWx2sITOEbRbX/MAMYGBgEkMVxahZiYJCBKTonLX+fkDgG0GNlNYIpnCQsOh8mbsjCYgkTXy8uvR+nAcgK0/gECmDifpw8oTDxMgGhBpwGOLKzu8MU7peSOW/BweFgyMJimc4rUAQT9+TiCiDKC7gwUsBiBezIzoUFGrKr8GnGBgSQDYjg5k3Aq7pFSKTfgoPDwYKDwyGNT6CAZNtx+RuqWYCgAXfklN6jayTo7AEHAIjTnaHLaQtfAAAAAElFTkSuQmCC",
    },
    {
      name: "必应词典",
      url: "https://cn.bing.com/dict/search?q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5ElEQVQ4jZ2Tv0sbYRyHX5Uzl8bLVNrSToUOHbr0T2gHqf1Baf8AvcUruNcpd5e75BK9H0Q9gptCogZKh6J2kWtDhkpxkmCwOIidijpYECoI5unQNo0QauwHnuUD78PL9/2+on9w0ItrWiSraiSNjER9w8NRTFUjuQvimhaJuKZ9ThaLJHyfGzMz3AxDRC6H7LooQYDi+50JApJhiJBVNVJ8nx7TZKhU4svhIYX1dW4XCsRsm4FstjOOg+K6fwXCMHiysMCfvKhUELp+OcHjcrkleL60hEil/l/wslKhxzAQuk6vaRLPZC5/g9dra5jVKvdnZ5FtG5FKIVkWSjeCB3NzvFpeBuD7yQnvd3YYW13lztQUsm1fLHhUKnE1n6e+v0973mxtIaXTJDKZLoY4Ps71yUneNhqt/uPuLrJlceUiwcP5ea5NTJCt1fh2fNzq321vI6XT/xacNZuUNzdpHBy0Dp41m1Tqde4Vi/RbVucZPG1bpPbU9vZ4triIlE7TZ5qdXyFmWdzyfYobG/w4PQXg69ERYysrKI6D0PXzu9Am+KAEAYrjELNthGEwVC5jVqvcDUOErv/6E45znlwOxfMQ8ujop2QYorguiueRcF16HQeRzSLl8wz87hXXPY/nkZye5icfi28JEi0cegAAAABJRU5ErkJggg==",
    },
    {
      name: "Forvo 发音",
      url: "https://zh.forvo.com/search/%s",
      favicon:
        "data:image/x-icon;base64,AAABAAEAEBAAAAAAIAAAAgAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAcdJREFUeJyFkk9rE1EUxX/3pZMJxtCRuim01k03IkKJCI0E9Bu4VgxxpZaKurf+ofEDqHUhFCKKuuwHUCiKBgRL24WloVZd1KIVTFprMQ2d6yKZzEsZ07u6575zzpw7XCGi+gula6AjIIMAKNO+7lz/djM7v5srNugbL10R4X6UaVB/67XUzzunNwNsgubog7k3oB3FAMmk99sbmRxoMxguLp7vTu3LHvCSqGrjRXVKIA3+GaAMEHMSVL7MQCz+tW2FTLGswaC6scXC1aG21QDSjz44S7Oz28ZxQRVFN9cn8imTKZbzNjFKDDBz8Xhd3K4hmgkF2Q9gVBkNafqi0/7r9y7M2dgbfZwzIqRbct8872TQZH1qdTBsVHUnGBjRw3vrORS0AltGkJeW4+09DUTiITBPjHFrZ8NHerJPF3r/p+2+PPnextWJ3Lx5e+5YJRjE410sf/612l8o5XaL+8ZLrxJe7wlVv5lW7zbXaNSpZ8u6uLRK3IkR3hI1EVwrP9t/KtQ21qg+zAtYp7z2/UePLW6sa4sb33VTB1vitgRh1HcfReRI1D9Q1bGVsZMFexZ5dQO3phO+415CGVShDrxeuZGZiuL+A2DYnV2Yre6zAAAAAElFTkSuQmCC",
      blank: true,
    },
    {
      name: "CNKI 翻译",
      url: "https://dict.cnki.net/dict_result.aspx?searchword=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB3klEQVQ4jaXSMUhqURzH8YuBrSbiIIKIS4vo4ORQgyJCBg5Fuuqgsyh3tKFwUsjFycEIwq0lBMc7RLQFIl4RnLxXzqbe4Yp0v28I6vle+F70h99y4Hw45///S9SO+Ukkasf8XovFgkKhgCzLrFYrdtZXgBCCw8NDbDYbnU7n+4Cu67hcLlKpFEKI7wOPj4/Y7Xaen595eXmhUqmg6/r/AUIIQqEQBwcH5PN5HA4HTqcTVVW37mma9t6fP4GrqyskSfqIx+Oh1+sBsNlseHp6olwuE4lEuLy8/BsYj8fc3NwQCATw+/0Mh0NM0+Tu7o5Go0GhUKBerxMOh4nFYl/3wDAMms0mPp+P+/t7ptMpXq+XYrGIaZqs12vOzs5QFGUbGAwG9Pt9FEUhm80iSRJHR0dMJhNOTk6oVCoAtNttzs/P2Ww2n4CmabjdbhwOB7FYDL/fjyzLCCGwLItSqUQwGKRarbK3t0c6nWa5XH4Cs9mM09NTcrkco9GIWq3G7e0tlmUBMJ1OiUajxONxWq0Wqqry9va2/YXFYvExynQ6zfX1NZlMhvF4/HFuGMbuPdA0jWQySbVaRdd19vf3ubi4YL1e/3uRXl9fyefzJBIJ5vM5AN1ul4eHh/fn7gR+kF/ZQQ/WnEhepgAAAABJRU5ErkJggg==",
      disable: true,
    },
    {
      name: "汉典",
      url: "https://www.zdic.net/sousuo/?q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJElEQVQ4jY2TMWrEMBBFdQYJuU23BsM2gbQBFSl0AEsEs+CzxClETpALpEwbttjGJ9hiwXLh1uf4W81EcpRNBgTfo9HTeDQjlnmCk7q4xrbP1joErEPIfGJsezipsbWPt5eiTo0BJfOqwjJPAAAnNevUorE54Hw6ZoCSzmN2ENFY3jifjlkNurpBNDbTFAcAl/0DRFc3DEhrkeptNgRwUkNQ4H8BTurfAV5V6OoGz4/3nHZXN3BSIxrL+ibgryIWAVQY+r9bOo1nwOvB/6j+Vqc+ryrWwqsdtrbME74+3/l7HUKxkZzUEJf9U+ZMe2Eb7O9UBnJSf/fBMk/cLOntqa1DgJOaZ4NrQJNXSrMEoUszAL01vXc0FusQ+BCNL+1FYzG2Pa51VtKhEx+TOgAAAABJRU5ErkJggg==",
      disable: true,
    },
    {
      name: "海词",
      url: "https://dict.cn/%s",
      favicon:
        "data:image/x-icon;base64,AAABAAEAEBAAAAAAIACAAgAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAkdJREFUeJx1k81LbVUYxn9n7y1+g3qPWYMosaKyVBp07yDJwFuUUKOoaU0v0SwuTRravHF/QFA0CQoHJTQJvHDR6IMUvXCvYpkfR49Hj573eRrsvY9KtWCxWO96n2e9H89bAZhd2XoVuG08aXvIMna5hWVUnqE9W8uSPl16eXyhMruyddPwre2USyCVJFJ+j9IuLCE5JL2eGX9sO82d//fXS2CXJKmk25nl59ogm7epc+OhQY4ED/d1U+3qpNY44ZuNTb6sQ8MgqSDXRCKrKuXsUyc1br0wzlBPN+XK0pSx4Wt8+OIEn48/Qn80kQJFEBHVrMgHWzzdnQKQVip89fs6PR0d9HZkjA/0MjP6KE+NDPPJaJ0PVneKOgTZlbwSA5BU4KfOwTzvM/H1doPV3Z957YnHeOXJUR7/4wFrkWCJRKF2SK0Qp62g2cptEWWo4vvDJmQd/Lr9F890pvm7gkwReQoSh9Fku37MTqNBblf7LQGqPV1gk2BKXKZoV5TaWZP7h8fsHDWIKPudR/NmtZ+hrk4AlmonSBUkkYWi7Xhu2Nzb56TVYjpt4sSkmJdGhnhn8lkAfly7x0YLrEAuIigJxgb6eHcqd3yPf6/N/Rof3V29UGVOELuSrlkCZ/8Bg3qzyRfLv/HZ+g57RdcK4f1def67Oz9YmpFEn87pcSADhdNpmN0IWqaYC7d1Y3sxU8S8pGkr0gOZ/aI4V7TfnhNdmlKH7fnkl7nrC4rWnEKLCh2EotDFRQesizpZOrC0aOmNP99/a+EfiilTPoj1fYcAAAAASUVORK5CYII=",
    },
    {
      name: "DeepL",
      url: "https://www.deepl.com/translator#zh/en/%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAACNwAAAjcB9wZEwgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGZSURBVDiNjZKxaxRBFMZ/b2ZHbWITUxkRC4PnBUW0k1gkoFlMYmIR8R+w0UZBFAvtLAMS0ipC0guCd0GOa23EJGTPkBRCSCNHKiEgMzvPwmjCuiv3lft97zff7BuhQraWTouJLwE0mmf518a7spwUPxwZvlmLms8B4wWrLZhHPvuwUg44N9afGPcc4T5gK4pFgSUv/jHrre8HgKHJE4nzHWBgn/sZdBuYqQB1Q+5rbLR2DUBy1J89GIbEmNmQNW8DqxWAgcS5IQBT5vqYP3H1Gw9AHyosAKECVA4QuKfIPMhHVKygV4OVU8ByT4BDsiI6rWpusdbYUdgpBpLSMeGTRLYx2o5q9kT0ja2P3xU401ODQJz1neYdVRkT9C1gyob/Ngg/3VbifJf9TVg1L2Q43UC1eo3eb8KfB7O7uRf7T782Yo8hXBG4DFwvaRgFFoP4GTqt7u/bFuTOp5dU9BUw8u/BOhqy5fZ//4HvNL6ErHlNkSmFb4e9YM1WMV+5xjxrvM+P99VBngI/qnK96UI66OrpEhcnThatXx/tiqJJdDA6AAAAAElFTkSuQmCC",
      disable: true,
    },
    {
      name: "金山词霸",
      url: "https://www.iciba.com/word?w=%s",
      favicon:
        "data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACGElEQVQ4y6WTzUuUURTGf+e87+v3BwxYToupoYVYgViLFiPtIrBNELZsIUIUFEXQqk1I/0JU24oWZRFFiyD7WhhBDWYfq4zCsRETdfwYHL33tHhtdLSF0IEH7r1cnnOe55wjPP1u/EeEYrLuaogpoJi4LREoBhiIQa3Btbb3DLZdQbwQIdSJIC7+8y+IPP5pAKnqEgMdz+lYusGvwm/uVo3Qu7OeOoXsbIkzw9OMLDiQDRLi7CED/gJ7x94R1o2RTF7naFBFz9AEuZLnVKqewcw2Ol/kyS0b601T84AJNbnPMD+BD3ZgzSc5/naKN7OOb4vGpS8FsjMlTqcbMGeYp4wQDyCUabWVeRcwWjS8xc9iytc5T7I6Qpxguq4C8UJMsuqKG6U5WOJgY4B4JTAlckImETAyvYQhiF+DmlfWKA21GdzkVR52tXAuXcuxlognXQn2J2oYmiwhpphfg+IVvJYlGDA+dZvzH4p0p5q43NnCx3ml/9MCDw4laK9VlAi8gFdCMQMzRFb7I5AYVnpeXWTWe+aAtEAARJkDDJ7o497NO5xt7QZzcRsBzMAESq+TRI+2c1iHN0/d/SzLE+Ps3nMEKXhMIMQLSOxs8VkT+rIBdIZNCyKCNTQx3Z6ht5Be9VwIzeIW/pAUxVwEDsz9dWMDQeMu+hb3kfflwhFu5S0+RIiyaVQrwhtmKxXUsQTAWMH8VvavMsMfIrbvQBU3VlgAAAAASUVORK5CYII=",
      blank: true,
    },
  ],
  image: [
    {
      name: "百度图片",
      url: "https://image.baidu.com/search/index?tn=baiduimage&ie=utf-8&word=%s",
      favicon:
        "data:image/svg+xml,%3Csvg t='1666880462710' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='36406' width='32' height='32'%3E%3Cpath d='M226.522 536.053c96.993-20.839 83.792-136.761 80.878-162.089-4.758-39.065-50.691-107.346-113.075-101.952-78.499 7.036-89.957 120.445-89.957 120.445C93.748 444.857 129.764 556.857 226.522 536.053zM329.512 737.61c-2.848 8.175-9.18 29.014-3.686 47.173 10.822 40.707 46.168 42.55 46.168 42.55l50.792 0L422.786 703.169 368.41 703.169C343.952 710.473 332.159 729.468 329.512 737.61zM406.537 341.666c53.572 0 96.859-61.646 96.859-137.9 0-76.12-43.287-137.767-96.859-137.767-53.472 0-96.892 61.646-96.892 137.767C309.645 280.019 353.065 341.666 406.537 341.666zM637.241 350.779c71.598 9.281 117.632-67.141 126.777-125.035 9.349-57.827-36.854-125.036-87.544-136.561-50.791-11.659-114.213 69.688-119.976 122.757C549.597 276.803 565.779 341.566 637.241 350.779zM812.666 691.174c0 0-110.761-85.701-175.425-178.305-87.645-136.593-212.177-81.011-253.822-11.558-41.478 69.452-106.106 113.375-115.286 125-9.314 11.458-133.813 78.666-106.173 201.423 27.64 122.69 124.7 120.345 124.7 120.345s71.53 7.036 154.519-11.524c83.021-18.428 154.484 4.59 154.484 4.59s193.919 64.929 246.988-60.072C895.655 756.037 812.666 691.174 812.666 691.174zM480.881 877.253 354.807 877.253c-54.443-10.855-76.12-48.044-78.867-54.343-2.68-6.433-18.125-36.317-9.951-87.109 23.52-76.12 90.627-81.614 90.627-81.614l67.107 0 0-82.485 57.157 0.871L480.88 877.253zM715.674 876.382l-145.07 0c-56.219-14.508-58.866-54.444-58.866-54.444L511.738 661.49l58.866-0.938 0 144.199c3.586 15.345 22.682 18.159 22.682 18.159l59.771 0L653.057 661.49l62.618 0L715.675 876.382zM921.051 448.006c0-27.708-23.018-111.13-108.385-111.13-85.501 0-96.925 78.732-96.925 134.382 0 53.136 4.489 127.313 110.695 124.935C932.677 593.846 921.051 475.881 921.051 448.006z' p-id='36407' fill='%23008bdd'%3E%3C/path%3E%3C/svg%3E",
    },
    {
      name: "谷歌图片",
      url: "https://www.google.com/search?q=%s&tbm=isch",
      favicon:
        "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='48px' height='48px' viewBox='0 0 48 48' enable-background='new 0 0 48 48' xml:space='preserve'%3E%3Cpath fill='%23FFC107' d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'/%3E%3Cpath fill='%23FF3D00' d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'/%3E%3Cpath fill='%234CAF50' d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'/%3E%3Cpath fill='%231976D2' d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'/%3E%3C/svg%3E%0A",
    },
    {
      name: "必应图片",
      url: "https://www.bing.com/images/search?q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB5ElEQVQ4jZ2Tv0sbYRyHX5Uzl8bLVNrSToUOHbr0T2gHqf1Baf8AvcUruNcpd5e75BK9H0Q9gptCogZKh6J2kWtDhkpxkmCwOIidijpYECoI5unQNo0QauwHnuUD78PL9/2+on9w0ItrWiSraiSNjER9w8NRTFUjuQvimhaJuKZ9ThaLJHyfGzMz3AxDRC6H7LooQYDi+50JApJhiJBVNVJ8nx7TZKhU4svhIYX1dW4XCsRsm4FstjOOg+K6fwXCMHiysMCfvKhUELp+OcHjcrkleL60hEil/l/wslKhxzAQuk6vaRLPZC5/g9dra5jVKvdnZ5FtG5FKIVkWSjeCB3NzvFpeBuD7yQnvd3YYW13lztQUsm1fLHhUKnE1n6e+v0973mxtIaXTJDKZLoY4Ps71yUneNhqt/uPuLrJlceUiwcP5ea5NTJCt1fh2fNzq321vI6XT/xacNZuUNzdpHBy0Dp41m1Tqde4Vi/RbVucZPG1bpPbU9vZ4triIlE7TZ5qdXyFmWdzyfYobG/w4PQXg69ERYysrKI6D0PXzu9Am+KAEAYrjELNthGEwVC5jVqvcDUOErv/6E45znlwOxfMQ8ujop2QYorguiueRcF16HQeRzSLl8wz87hXXPY/nkZye5icfi28JEi0cegAAAABJRU5ErkJggg==",
    },
    {
      name: "pixiv",
      url: "https://www.pixiv.net/search.php?word=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACaElEQVQ4jY2TS0iUYRSGjwupXYsIAqFdDl13tclNd6WgZVQULZrB6ddsbhA1FwkyNQOjCMz805nxMiM6ajq/OkjZxQElLS0sK6NQI7QkCCrTnhbfmBMatXj54PDxfO97zvlERERM245IlqbLXut/StNlj7VM0kzbRdZlHBVfJ+LtQDzGgtwGci6KuKN/1ueVH0Nc9bMi+3KD4u1AnGHEHkK0IHIyiNhDLD/TQIozrGpaEHGE1D1nGHGGEF8nIpnZt8QdRaxBUh0hDvl70HtHaR4ao/XZBLHn72kcHONwoAc5XYucqkFcCYjHQGSHRRdXC8eCcQbHp3kwOsnxQBxTQRurPBHSL7Ria3jE568zdL/6wGp3REHmASv3a3rkxRTfZ+cAWHsxipyoVK/Z69RpriK9oI0fcz/pH/vEMkdIxfUYSHlFhd40Mo29aQCATZc6kNyapKxhZdlchaPlMQCW+j7EGkg0s+SqnlZ8F0u4D4DNJUsAnGEkt4b1RQYAxvAEolWrCaVmaXqKsxlngv5XQF4taedvA9D39iOSV6sAssuiiy2C618ArZqtpTEA6p+8U2N1RxHZa9XF3vQbsKG4fTHAFkLMVfj73gCQVd6tIniMxYAtpTE1BWtAKduP5FTjbR8C4Nr9l0hOddIeJAD2ZjWFh6OTlPe8xmcMYWse4HLXMIPj00x9+YYt0q/c2euSAJnZlckOdl6/w4GybrztT7lyb4TCrmEO+uOsONuoHCWvswJoleJsxZFwYCoyEHPVQgRrQOW11S1ubH4MkTUbd4tWM1MYnwAg42Yv4mpZ+gcmyxdDrDcmfgF4QGAxnLBCrgAAAABJRU5ErkJggg==",
      blank: true,
    },
    {
      name: "flickr",
      url: "https://www.flickr.com/search/?q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA+klEQVQ4jWNgGAUIIKBqwKCfUMSgGZXJwCklhy6twSCoW8BpUZTFaZIjz8CviCprXtbFkHX3PxynXPrGoBIQC5Ou57Fv/C/Z+B+Gf4jV/szgMs6EyMq7BqJoRjaEQ1zRmUXRFVkzsiEaDIK6DAwuE1ZgNSDr7n8Gvbj8Wfy+c7AZ8F+y8X8tl30dA4PrlNU4DdBPKFrCH7QUlwGNPE4tDAzqoclYNaff+MMgoGoQwaYdhcsAGxY5G0g4eExZh2GAUVY1LBCX8wevQNfcyevShRoTim4hDHZNMxls6yczSJjao0ejP5ta4Axe35mT+DwnO7MoupKfXoYfAABPvsL2GuU3QwAAAABJRU5ErkJggg==",
      blank: true,
    },
    {
      name: "花瓣",
      url: "https://huaban.com/search/?q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC1klEQVQ4jYXOyU+TeQDG8Z//gIkxXogxXky8TTIeRhMzcSEdoKW0SIFibYuJLFbZVGyxlLbQFoqoBEhEBSlbA4xxNwq9zMXMeTLO0b4vWOhGoSKBUfHrAZdEEZ/kOT6fPMJtNLVPelpD92yNobv1ttCd2vNTI5aqhx0lxpv6/ftNO3fs2LN7+/a95Qd/r75VZBgPGsyTE0ZzaMJ4MvTQXBYSU772v/nrOdx/zIeJe6wF/+Td4CjvAqOsdl/n3xNlqf+Kjellh4dVfycrrVdY8XWw2noFOnoQD5yuEE8mWQyOsxAYJdU3SKovQMJ/lZmSUiK5OiI5Bcg5BUQqqom7fcScXuJOL288lzcAAsMkr/UwXVyKpMxHyitEUuqQFBrCmbnMmMqIubzEXb4NgMEgqdtDRMqr10d5RV+BrHwkhYaXh3OYKa0g0dxG2uNHjDU0PvoCjIwT93Uga/TIGv33wB9awpkqXh5Rkqi5iORoeSM6LZbedWCCheExIpZzSOpiZE3JxoBCTfhwNvPHDIwbzCGhP3TItPb4GYtjd0jdHGDGVI6k0W8OZOaSVORxYd9vzSJj27Zd8sDwwsrdB8z33GBaX4qsPf7zBwUGBtX5j4QQQnRVWvp5OkWy6zrTRSbk/E2AI0qkbC3Js+d5cbomKYQQYndGxt7ZoZH0cm8/8o8AhYbwURWyupDZs+eIXbATr7UiPqcsW3Xmfd8QEZ0RSV2EpCokrDy23iwtsqqQV+YK5i46mLM6iNbZWKyzfQWEEMKr03WtNraQqKonUlnDq/IqIqdrma21ErO7ibl8RC+5mau3E62zkf4WEEJsadLrfcuBEd4ODJPq7iVxtZuE/xrxFj8xRwvRBuemgBBCiKxfftU+t7v++b+3n7c9N0i3dzLf3Ea8yUOswUm03k6szsbrHwGfsrX4wMGTwVOVT144XHPznnaWmttYcnp5bXezZG1izdrER/CEaFr9QFrRAAAAAElFTkSuQmCC",
      blank: true,
    },
    {
      name: "Pinterest",
      url: "https://www.pinterest.com/search/pins/?q=%s&rs=typed&term_meta",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACD0lEQVR4nO1WsW4UMRB9sxsECAmlpbrbRKwpKE4nk0i0/AQSogGlSInID/ABKegoEimioCC/kJYiySKCkE7aC8rtUdKgSClQyHlSBN95N/batyQVN5U9nnnvzazXNjCz/92oSVKWiPcAnlfcR3KQL16rgCwRHBKn1Ki7NPz+5coEhBJXTQ5yL350XeShubUKnQDMZ7Lo3zBdH4F4IRFntvC6TjgXsnb6B0Rz04CNcy3CXXluARWQW7fjmw97vVPXesSq0y0OvzpFUNySR70fVR7rHthPxK+qT5NnbbFhq1BRdGD6L1XMo6GNyyqAgHlzrsE+L6RPQHhpy9GWJWL8+7HCal2sU0DJmD9MhrRzMcCxHOTk+K4dPXg0zN+VxLXFrldAlqRb5lwW/WcAkLXSBxNfPj8OUPzKV8PYCEteAcz01Joc4a0dlN4EC7DCVvGA39ZIxje7ANy9UgEAts3Jbut+BwBk0V/7F6JgAbLIV8x5HEWTXQ1+7QM0N+Z+kp6UFhl7XgE20/83gdZNv+6Oywh0pySuyJeDBDDjp0vESMX3tG95eHgwyeFTs/rQSyz4KNYWchfsLYrHkcKnMtMURzFwUVEdietIzhLBl8gB2MiBBtex7sA074S6rtVuwmqiryvTknsFWADWnYENyIMEaCA5yIn+/h2+9is16oaQA02f5e10E0QvKu5Gz/KZzewcjEjYbJKZwQoAAAAASUVORK5CYII=",
      blank: true,
    },
    {
      name: "Yandex",
      url: "https://yandex.com/images/search?from=tabbar&text=%s",
      favicon:
        "data:image/svg+xml,%3Csvg t='1666872628734' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='10516' width='200' height='200'%3E%3Cpath d='M451 1024V691.8L229 96h111.6l163.6 459.4L692.4 0h102.6L553.6 695.6V1024h-102.6z' p-id='10517' fill='%23FC401D'%3E%3C/path%3E%3C/svg%3E",
      blank: true,
    },
  ],
  "Keyword Analysis": [
    {
      name: "Keyword Generator",
      url: "https://ahrefs.com/keyword-generator/?country=us&input=%s",
      favicon: seofavicons["ahrefs"],
      blank: true,
    },
    {
      name: "Keyword Difficulty",
      url: "https://ahrefs.com/keyword-difficulty/?country=us&input=%s",
      favicon: seofavicons["ahrefs"],
      blank: true,
    },
    {
      name: "Google Trends",
      url: "https://trends.google.com/trends/explore?date=today%205-y&geo=US&q=%s&hl=en-US",
      favicon: seofavicons["google"],
      blank: true,
    },
    {
      name: "Whois",
      url: "https://www.whois.com/whois/%s",
      favicon: seofavicons["whois"],
      blank: true,
    },
    {
      name: "Keyword Rank",
      url: "https://ahrefs.com/keyword-rank-checker/?country=us&domain=%currentUrl%&input=%s",
      favicon: seofavicons["ahrefs"],
      blank: true,
    },
    {
      name: "SERP Checker",
      url: "https://ahrefs.com/serp-checker/?country=us&input=%s",
      favicon: seofavicons["ahrefs"],
      blank: true,
    },
  ],
  "Website Analysis": [
    {
      name: "Traffic - Website",
      url: "https://ahrefs.com/traffic-checker/?input=%currentDomain%&mode=subdomains",
      favicon: seofavicons["ahrefs"],
      blank: true,
    },
    {
      name: "Traffic - URL",
      url: "https://ahrefs.com/traffic-checker/?input=%currentUrl%&mode=exact",
      favicon: seofavicons["ahrefs"],
      blank: true,
    },
    {
      name: "Backlink - Website",
      url: "https://ahrefs.com/backlink-checker/?input=%currentDomain%&mode=subdomains",
      favicon: seofavicons["ahrefs"],
      blank: true,
    },
    {
      name: "Backlink - URL",
      url: "https://ahrefs.com/backlink-checker/?input=%currentUrl%&mode=exact",
      favicon: seofavicons["ahrefs"],
      blank: true,
    },
    {
      name: "Similarsites",
      url: "https://www.similarsites.com/site/%currentDomain%/",
      favicon: seofavicons["similarsites"],
      blank: true,
    },
    {
      name: "Similarweb",
      url: "https://www.similarweb.com/zh/website/%currentDomain%/competitors/",
      favicon: seofavicons["similarweb"],
      blank: true,
    },
    {
      name: "Broken Link - Website",
      url: "https://ahrefs.com/broken-link-checker/?input=%currentDomain%&mode=subdomains",
      favicon: seofavicons["ahrefs"],
      blank: true,
    },
    {
      name: "Broken Link - URL",
      url: "https://ahrefs.com/broken-link-checker/?input=%currentUrl%&mode=exact",
      favicon: seofavicons["ahrefs"],
      blank: true,
    },
    {
      name: "Website Authority",
      url: "https://ahrefs.com/website-authority-checker/?input=%currentDomain%",
      favicon: seofavicons["ahrefs"],
      blank: true,
    },
  ],
  music: [
    {
      name: "网易音乐",
      url: "https://music.163.com/#/search/m/?s=%s",
      favicon:
        "data:image/svg+xml,%3Csvg t='1666873073102' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='14673' width='200' height='200'%3E%3Cpath d='M604.71296 63.911253c-53.548373 19.667627-95.06816 77.038933-95.06816 132.222293 0 16.390827 3.822933 43.165013 8.741547 59.55584 4.911787 16.390827 7.645867 30.59712 6.557013 31.143253-0.546133 1.092267-18.03264 9.28768-38.792533 18.57536-72.669867 33.3312-124.576427 101.07904-134.956373 176.479573-18.029227 126.76096 60.101973 230.57408 173.202773 230.57408 72.666453 0 134.95296-43.165013 160.631467-110.36672 16.940373-45.89568 11.47904-104.905387-20.21376-204.89216-8.192-25.678507 54.64064 9.28768 95.617707 54.091093 50.26816 54.637227 68.297387 135.502507 46.987947 214.17984-19.124907 69.389653-77.03552 136.598187-146.428587 168.28416-184.674987 84.691627-385.737387-11.472213-440.920747-210.899627-20.763307-74.8544-13.66016-145.33632 22.401707-222.921387 27.86304-60.101973 86.326613-120.203947 146.97472-150.254933 48.626347-24.040107 58.463573-32.23552 62.83264-52.452693 3.826347-18.57536-8.741547-45.89568-25.678507-55.18336-36.061867-19.67104-118.019413 21.30944-192.8704 96.160427-68.84352 68.84352-101.625173 128.39936-119.657813 216.91392-38.792533 187.948373 57.91744 387.92192 227.84 470.429013 61.740373 30.59712 112.551253 42.06592 182.490453 42.06592 154.077867 0 289.57696-78.67392 355.689813-206.527147 32.781653-62.83264 40.977067-100.532907 37.700267-175.93344-2.73408-72.123733-10.92608-102.720853-40.98048-152.439467-49.718613-82.50368-134.406827-142.05952-216.364373-152.9856l-27.316907-3.280213-9.84064-32.781653c-13.653333-45.349547-12.56448-60.101973 4.37248-73.212587 18.029227-14.206293 37.700267-14.752427 62.286507-1.092267 46.441813 26.22464 54.64064 28.409173 73.216 22.398293 19.124907-6.007467 36.05504-30.047573 36.05504-51.357013 0-19.67104-26.76736-48.080213-63.924907-66.112853C696.507733 55.169707 639.68256 50.797227 604.71296 63.911253zM574.65856 460.032c19.12832 71.031467 20.76672 91.245227 9.291093 113.646933-18.57536 34.966187-72.666453 46.987947-99.44064 21.85216-22.401707-20.759893-29.50144-39.8848-29.50144-78.677333 0-40.434347 10.92608-67.20512 36.604587-90.699093 18.578773-17.483093 57.91744-38.2464 62.28992-33.327787C555.54048 395.014827 564.82816 425.065813 574.65856 460.032z' p-id='14674' fill='%23d81e06'%3E%3C/path%3E%3C/svg%3E",
    },
    {
      name: "QQ 音乐",
      url: "https://y.qq.com/portal/search.html#page=1&searchid=1&remoteplace=txt.yqq.top&t=song&w=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADMklEQVQ4jY2TbVATdADG/3cBDgkNN2QyZWMhoKQwtLIyQ/DgaPvAAUVddUjU2UUdd3Z1vmR2B3VxUWhJqyBS0vAlDo7VImCWsPM4KcC0BtgYgzFjzcmY42Uovz7lnZ3n+Xx+fs+X53mEuDvJ1E+G7L5LrwjaqFmed6D8ibqaU6mdpd8s78ozLrny6M7FvUKIkDuSccrwRyy/Vg14ffUcdmt56aKcp87cR/a3S9C3rsHavcG2Pl6ScVtYs06ePePpmMXXQs/km1Q4tlDQJiOrPpw3GlR4/9JyfSwd34UH5rc8GPL0LXBoqFh11WmYXPC1sHC1lsnxfZRZNLzbloitL4fZoXwCl3TMDaXjP6/hsil6WhouEm8GfFyeU7vgbeaG+3OuT1Qwb99J9wUdr55O4FJvJtO/a/H3Z+HvS2OqW4PHFEPNW6GN//GLPMOHfPOuagLj+wmM7WFmoJhr/fkc6XmMyva1TJ3NwNuVxuSZzXg6NLgMSuwnlwaEEBFCtjQ4dW78IHP2t5m1ljBj3YH/z2K85ixGTI+zz6yh58dU3MZNuL5/iImmZJzHVYwfW4YySqQLdYxk2/TQbvyWHfgtz+MfLGDGVsKVjnRchof5uXUD77UmcPmUBufxZBxHkxitUzJaKyVJIfKFTBa80XtuO96eAqb6c7k2kIt/5FncYyX8NFDE4T+0lJoTaWuIY/TrNYzUxGOrXsXwp1JipGKbEEJI7E1b/f+0Z+ExZ+I9r8PhLmLM/xpn/36R0l+SeO6HFbx+MhLbF3EM69VYDyqwVETMCyGkQggh3i9eWe/Qr8ZaqeBcUwodzjw6HTmcHtFR99tm8uojyPwqlL4aJbYvVQx/puDQC2EtN2uUSIT6YlWsz/aRgoY6OYVGBbvaV3PAnMIHpiT2t8ZR0hzJ4LFYRo+qGNSvmI0IE+tuGVOqOiTXUrky0FUVRXbtYtKqF6HV38srJ+Tsao+m2RTLhDEBR+P9N9LWBxfeds7qqKCMznfk9u8+jOSZcglby4LY/kkYBoMSl2kt/UdUzmT1Pbo7HkoIIdkUH1xYWbTsRMteea+xLLqvujSyMT1F8rIQIuz/5n8BdBDOUVi5DnwAAAAASUVORK5CYII=",
    },
    {
      name: "百度音乐",
      url: "https://music.baidu.com/search?ie=utf-8&oe=utf-8&key=%s",
      favicon:
        "data:image/svg+xml,%3Csvg t='1666880462710' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='36406' width='32' height='32'%3E%3Cpath d='M226.522 536.053c96.993-20.839 83.792-136.761 80.878-162.089-4.758-39.065-50.691-107.346-113.075-101.952-78.499 7.036-89.957 120.445-89.957 120.445C93.748 444.857 129.764 556.857 226.522 536.053zM329.512 737.61c-2.848 8.175-9.18 29.014-3.686 47.173 10.822 40.707 46.168 42.55 46.168 42.55l50.792 0L422.786 703.169 368.41 703.169C343.952 710.473 332.159 729.468 329.512 737.61zM406.537 341.666c53.572 0 96.859-61.646 96.859-137.9 0-76.12-43.287-137.767-96.859-137.767-53.472 0-96.892 61.646-96.892 137.767C309.645 280.019 353.065 341.666 406.537 341.666zM637.241 350.779c71.598 9.281 117.632-67.141 126.777-125.035 9.349-57.827-36.854-125.036-87.544-136.561-50.791-11.659-114.213 69.688-119.976 122.757C549.597 276.803 565.779 341.566 637.241 350.779zM812.666 691.174c0 0-110.761-85.701-175.425-178.305-87.645-136.593-212.177-81.011-253.822-11.558-41.478 69.452-106.106 113.375-115.286 125-9.314 11.458-133.813 78.666-106.173 201.423 27.64 122.69 124.7 120.345 124.7 120.345s71.53 7.036 154.519-11.524c83.021-18.428 154.484 4.59 154.484 4.59s193.919 64.929 246.988-60.072C895.655 756.037 812.666 691.174 812.666 691.174zM480.881 877.253 354.807 877.253c-54.443-10.855-76.12-48.044-78.867-54.343-2.68-6.433-18.125-36.317-9.951-87.109 23.52-76.12 90.627-81.614 90.627-81.614l67.107 0 0-82.485 57.157 0.871L480.88 877.253zM715.674 876.382l-145.07 0c-56.219-14.508-58.866-54.444-58.866-54.444L511.738 661.49l58.866-0.938 0 144.199c3.586 15.345 22.682 18.159 22.682 18.159l59.771 0L653.057 661.49l62.618 0L715.675 876.382zM921.051 448.006c0-27.708-23.018-111.13-108.385-111.13-85.501 0-96.925 78.732-96.925 134.382 0 53.136 4.489 127.313 110.695 124.935C932.677 593.846 921.051 475.881 921.051 448.006z' p-id='36407' fill='%23008bdd'%3E%3C/path%3E%3C/svg%3E",
    },
    {
      name: "酷我音乐",
      url: "https://sou.kuwo.cn/ws/NSearch?type=all&key=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC+klEQVR4nIWTX2hbZRiHn++ck3OapMu2oG3WCm2XUJm4zihK/TN0rQ6ZcxsIq0w6hG0XE/FC2BgqInhR6o0yN8U/IBYVp2PMC91VsReheFFdt27FaknDTE66Lmt7mpwkPfnO+byoE4SpD7zwXvze5+blB7fHiIRI73iw5dt3j6VVsi06BMRvFxS3FguSsfbkwY6e3hMnDwVmulOCUiA0KtLk/E8uJ89dreSn7ONLS5XPgSqACMGRF0798LEZshBizahpgtL8NOXJT7lu6Ow48DC6JlBK8fuSjVSSX94fr9gTpVbx/ScDas4J8dFsN4mOu0ktXGAwUuCeWAiEABTvTBYYv78ZLR7FX3SIZRyG97Wz642f3zKK+TyHn01xcKdL11NH2PV4C6m4jywBmgaGzqHWEOZUmWq1yNCJJ2FwMyISJf/iKEbY0nNApykX6dqzjYmnU5z5epL9hkvLepOzWZ/hvRt4rfcBRDRG/dI4ZGeIPDNAADnt1zknACDwUIDrChK772PE02lrD3Hm9UfZ5DvUM6P4dhb5h00jW8DPfQEgtc/OZ69lphbXXqEU0pfkl4uUPAcME2FZEAQoT1IbG0cWlolslyjnKgIKxvbWcD294LHz5QzFVsFN2wPF2ug6wrLwb7oE5TrBimTd/m6EkUcYHehctjXpB/PeDZcvewRqxiC4VEYFCsVfAl3SmHNpXLHw7WacD4vI5W0IazMCPO3OqJlrVMuslivITX2Et5ymacyiMl2G1d9QCyMEhSj4ArP7DpSrWDk1hQgnWYWc8cGEPXRvk/tqX3s45q9cp27PQ/Io4doIhjmLaEoAywBsONyDMjeCFuWr72ZXAAzAeynjrO9vq42qhOpTgYQgIGhK4AcFhNVFaKuNqjYQVhcT06Xgkd1vvyLh9C0BAKO216/b556LpB47q4XXrfVAb0ZYncSPprk2X2NLeuibG05t4F8K+DfN8YeeX2p5YlCNvdevnItvqt6td80A5v8d/gMdhg340YLUf+X+BAnLRacR4gVKAAAAAElFTkSuQmCC",
      blank: true,
    },
    {
      name: "5sing",
      url: "https://search.5sing.kugou.com/?keyword=%s",
      favicon:
        "data:image/x-icon;base64,AAABAAEAEBAAAAAAIAByAgAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAjlJREFUeJytkz9oU1EUxn8v7zW5xNekhSL+QxoUmmBxUozRxcUOgg2pgkJxrWBBqh0cdROqg5BBBaeKgkIIIkLawUFsaoUsUtLaDKUNVklKQhrb25j3rkNfYqx2EDxwl3PP9333fPccjW0RTZhngT4gAoScdBaYAlLJWHWitV5rAXYDw8CQEMI0dB2XSwfAti3qloWUsgo8AuLJWHWxVbU7mjDHL73pUlcm96lsKa1sZau6XWsey64rW9lq5utrFU2Y444ghsMxLIQY9Lg97NkVoMd/AltZfC7PUJR5iht5ANatCvOlaYQQg1LKb8Co4fQ85G5zA3B893k0TWMsc5m5Unq7RQC429xIKYeiCXPCBfQJIUxN27Kju72XwsbyjmAATdMQQphAnwFEDF1vXgY7IqzXK/QHRpq5oswzX0pTlPlmzsFEDCDUcBvAa/jwGj6igRt/KM+XP3A3cwGg8UMhY3vRs9xtVjfyFGWepbVZvIaPYOdJ+gMjBDvDnNp7kfcrL3+9BMjathXW9S2uyaUnvxGu1ytkCimW1mYZi6TpEgeArdkAsi5gqm5ZOxrWiKu9caeNaQAczJQLSEkpq0qpvwIHDt3i8Zkch/3HeLX4gLlSGqVUYypTGkA0Yd4TQtz0uD0cbD9CT0eY/sB1vIYfl6bz5XuO5wt3+LT6FoDN2iZSyvvJWHW0YWL82tGH507vHwg2lJercyyUP/Ju5QWZQgoApRS1HzWklE+BOPyHZWoStBD90zr/BDWFAshUlB4uAAAAAElFTkSuQmCC",
      blank: true,
    },
    {
      name: "一听",
      url: "https://so.1ting.com/song?q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABfUlEQVQ4jZ2RTUsCURiF/SFton27qIgoQ9skidJSF5qu2gZRtGrVan6ABJGbIqiwDz9CLSINIceKcNOoV8MpxQ9EJ2uc62nTiJUj6gt3c7nnOec9V6VSGIZQ2GLCr8MQCqX3LRFDKKysAFNUgNrLY8qdwehJEqtsCSvPn8oQhlAsP9RhZQXog1lo3ElMul7o4mEcW4EkVTufsBHNw3xXqCsCxvcib/pgFjofgeaCYMyVwOZ1Gh5SARN9h9aTgtafgzlSFjtC1mJFwXCZxtwpRydcCcyfc9RDKqh+iZQXREiSRPEzhrM4/y+BMyvilq/iOFXBAVfG33ks1sEQCoOPK3RuPZzDbqbWcmo0RAoAktSgTQByyYod2MI52G9e8UGbLddwsYH7ktjbF8oAOYHsyBCKnRp6AwSyVcjiroJOAIZQHJHKYIB2SDtAvlvaduz3DLGwQmt3Y6iMoXWHt+8kFlbAwlUes/48RmZ09r7XkUHGUBnD01rTQAAZ0q3Qb/EHnAbFqFNRAAAAAElFTkSuQmCC",
    },
  ],
  download: [
    {
      name: "海盗湾",
      url: "https://thepiratebay.org/search/%s",
      favicon:
        "data:image/jpeg;base64,AAABAAEAEBAAAAAAIAA2AgAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgCAAAAkJFoNgAAAf1JREFUeJx9kj9r8nAQxy8xLQatGmPtIoiigoKCoAZHyeQutEtBHHRpl7yELq6+AP+8AIcWOxURQRzMIDhEyeLilIKDQYUg+eWeIT48VujzWe4Ovtzd9zgKEeEvl/kVFEXZCWMHVVUlSTIMg6bpK6ndpV6vPz4+nmtE7Pf7v/W2qVQqtvI8gWHOyc3NDSGE4zhCyH6/BwDLshDx9vbWFvxYIJ1Oz+fz5+fnXq8ny3KtVnt/f282m5f2mMtFWZblef50Or2+vjqdTtM0X15eFEWx5/zzhIjtdtsuvV7v5cy7uzuHwwEAhULhdDoh4vVNdF0Ph8MulwsAEomEYRiEEAA4Ho9nD8vlUpIk0zTtToIg5PN5n88HAMViURAEjuMAIBgMMgxDCKHG43GpVHp7e3O73Q8PDxzHHQ4H0zTtVVmWpWmapulcLjcYDKbTKTMcDgFgPB5blhWJRDKZjCiKqVTKPvRut1utVqqqdrvdVquVTqepr6+vz89PRVEajcZiseh0OtvtNhAIxONxTdMMw4jFYqFQ6Pv7W9M0QgiFiJqmJZNJn88XjUbv7+89Hk8ikbAsS5ZlVVV5ns9msx8fH6IoVqtVQMT9fu/3+yVJ0nUdf6Lr+mQyeXp6AoDZbIaIgIimaY5Go+12i7+w2WzK5fJ6vUZE6j8vfQki2h/+B8UpLqpv9VygAAAAAElFTkSuQmCC",
    },
    {
      name: "谷歌搜索",
      blank: true,
      url: "https://cse.google.com/?q=%s&newwindow=1&cx=006100883259189159113%3Atwgohm0sz8q",
      favicon:
        "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='48px' height='48px' viewBox='0 0 48 48' enable-background='new 0 0 48 48' xml:space='preserve'%3E%3Cpath fill='%23FFC107' d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'/%3E%3Cpath fill='%23FF3D00' d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'/%3E%3Cpath fill='%234CAF50' d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'/%3E%3Cpath fill='%231976D2' d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'/%3E%3C/svg%3E%0A",
    },
    {
      name: "动漫花园",
      url: "https://share.dmhy.org/topics/list?keyword=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC1ElEQVR4nCXTyY7cRACA4b9c5a3tdi8z6e4JsygzTKJIcwJxyTPwfDwJnDjNBQgicCFESiRamSW9jt2r7barXBz43uETP02srSws04JD7tBUPv0RtHwAGC8tgxC+fyV4mMPNAMZryy9Lwd2TRu01VAeYTva8+e6YsoDbv1LiqMdun+HJkJeXHlHT8CJy+JxazjoOL2rBeC5QsxWkU8siaxjfafqx4OV1F7B0vA6ykdS1ZaYl/ZZhGCkeU83bj5pdblGzZcFwFHJ+McBRmnRnCbFIqSiNBXPAOIJ3D4ZAKk5VzqxUBL2Q/SJHbfca12wJByEEClNpssaQaUGaHohcwdmRywKXNKv48aHg8qsu89UWmgbneNgmLeHnX6fcTyzSkRS1x+0fcz5/qdkeJFFXIQr4+EmzLRLefdiQO22c0wRV19AKY6Ijh0KDdOH+3wkXF22+vW7DwfL7+wWLDBrj8eabFunGMF8tifMYB8ANBYd8QSM0xhquzk+oVw1uU+DFFiE6CNenn0ieJZrLkU9CyJFyUSjLdLzm9NmAr08UERWTnWCyXbOpz+j4lkHHkEQtzp9LTA1uy2KDkNqxqDKzXA18Li5CdjuN9jzu7kp6SUIImHXDsB3QTqB0DOVBMh8f2G+h7AWoOBBcn4ek2YFKeJCDFgIAzwKOZK/hyyMsVxnrrOLm9Qjh7OiXCnW/2PG87YGS1AZkY0iOFPapAqD2NL/9uSQXCa7oEokNw5Fks4tQyqB6wza3759wNLy+iYmkR7XLKfGQLpjG5eqqy9Oqpt2SXJ/3iY3huC/5NN6jAgkngx7T6YIo8FGqIokUs6xmU0CrbXl1EsDAASnAVJSVQgNRO8DphJZ+1wFASuh0PPbZmtNRl7d/PzDNGkoLbvh/z9z4PK5hNsnoJBLxwz/Wrraa+RPYpiA2UFiN348BeBznWEcTBz6HqqRxXOLQ5fTYJ+pI/gNDt17HeSMTvQAAAABJRU5ErkJggg==",
    },
  ],
  shopping: [
    {
      name: "淘宝",
      url: "https://s.taobao.com/search?q=%s",
      favicon:
        "data:image/svg+xml,%3Csvg t='1666880201701' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='32068' width='32' height='32'%3E%3Cpath d='M228.96 172.16a76.64 76.64 0 1 0 75.84 76.64 76.32 76.32 0 0 0-75.84-76.64zM317.76 535.52C307.52 458.24 160 360.48 160 360.48l-57.6 82.24s123.84 61.92 134.08 112S66.56 753.28 66.56 753.28l128 94.4s133.28-235.04 123.2-312.16z' fill='%23FE5100' p-id='32069'%3E%3C/path%3E%3Cpath d='M957.44 380.96c0-66.88-66.4-152.32-174.72-171.52s-263.04 60-286.88 64-30.56-3.52-30.56-3.52l27.2-53.12L400 178.56A416 416 0 0 1 355.04 288a425.28 425.28 0 0 1-74.72 92.64L338.08 432l76.32-90.88 50.88 5.12L372 464s3.36 39.52 32 41.28 72.96-67.04 72.96-67.04l52.48 10.4 1.76 68.64H360.16v46.24l169.6 5.12v145.92s-48.96 7.36-70.56-23.2-12.96-78.72-12.96-78.72L336 609.28s-6.88 84.64 22.56 126.88 90.24 57.12 152 51.84 215.84-70.72 215.84-70.72l10.08 46.4 81.44-37.76-49.12-130.4-66.24 13.76 6.88 56.64-81.6 36v-130.4L800 564.64v-48H624.8V448h168v-54.88H517.92l40.8-80A562.88 562.88 0 0 1 679.2 272c48-6.88 69.44-10.24 113.6 17.12a108.48 108.48 0 0 1 50.88 67.04v381.76a96 96 0 0 1-60.96 53.12c-48 16-124-1.6-124-1.6l-6.72 53.12s128 25.76 210.4-8.48 95.04-132.16 95.04-132.16z' fill='%23FE5100' p-id='32070'%3E%3C/path%3E%3C/svg%3E",
    },
    {
      name: "京东",
      url: "https://search.jd.com/Search?keyword=%s&enc=utf-8",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACoElEQVQ4jZWTW0iTYRjHdxcUfrPZtq+cm25LxaQSQ4tO2IkKO1yEQVEERWJFYUQJQQUZUWQG0QGKIgoCS4pVBlKapH6fztNsW+zQZnOW5GGyxFkQvy4+LbUguvjxvu//efjxXDyvqmCaUFymFitKBf1/U6YWK1TlgljVMzsNt96qoLPi1lqUc/w+zng21tsjpqEqFfQVbr0VWWv+CykKsxSkhGQkjUl5a824ddYJglkpyDoLrRm5dK7Kx25dSEdOHq5NBQqbt9OxZA3Nxnm/hJMEUkIyTeJcfPuPEKmuwb11B+ErN4j5Aww73jHc6eRrcyufb96hMy8fSWPCNUmgMdE0O5Wuk2f51tODd08R/bYqYv4AwZLT+IqK6Xv0hNFQNwPPXvJu7RacmpQ/BcGSM8QCQTy7C+mrtBF5VUd71jIapou0ZuYSLr/G974+ui+U41Qb/y0YelOPY+k6GuMSaZwh4li5gahsZ8D2Ak/aov8QqA1IGhOtmbn0V9oYfFWLPydvikCcS/DE6b8LBANSvJH27BUMVFUz+LIa34KlYwKdhUbBgKyzEDp/mdGPITw799FfaWOo9i0dS9bQMF1PY9wcvHsPEgt00Xv7Hu7EdFSlgrbifVIGbVnL8OwuJCrbGXY4cW7cRv/T50Rlu7IDi1fjP3SMaEsbI14/nl37ccablAm6Vm/iy8PHjHj9jPj8dJ06R0t6NpHqGn6MfiPyuo6hunpGvH6iTS0Ejp3Ebp6PS2tRBMHl6wmXXeXT9dv4DhylJS0bSZPMh8PH6b37gM+37tF75z6hsxdx5RfQbMxA1pgmbKLWjKQ2IAkGpPgk5IRkZK0ZKT4JKS5RyQWD0jPT+Kvu1llRXRLEqrCYiktr+c3Yr5uUTam5dVbC+lR+AkXUXUZHV2HdAAAAAElFTkSuQmCC",
    },
    {
      name: "苏宁",
      url: "https://search.suning.com/%s/",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABMUlEQVQ4ja1TQU7CQBR9xNWwpUTJNF0A4VCEhVvjBRo5AAR2pjHxAO0C40JMqXgDTfQE0mqiB8CFganxuTBtaKdFYvzJ28x/7/2Z/+cDJWFU0fBtzHwbgVFFo4xXGE0DndBBxAnICRg6iJoGOltFgy6GaxcqEZVh7UINuhhqBspD/Js4gfIQawa7ihNkxK062ptJy7I0Qf6sVUcbACAFzMUpwkLy9ICc7hcahA4iKWDi5gS3+Worr0I+nZH8Iklycc6VW9FudW3D1w0u9sj7Q2px1/vJbXB9GzNIATN08Jwm3q5IkpZlZUCSfL1MxZGDFylg6k38/EiLZsQkGb/rTdTG+HBEqqX+BLUkH4+Lx/gvH2nUw3gXE+UhHvUw3roXf1qmfNQEZNDHPOhjXhOQZbxvFy/H102X8MIAAAAASUVORK5CYII=",
    },
    {
      name: "亚马逊",
      url: "https://www.amazon.cn/s/ref=nb_sb_noss?field-keywords=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACHklEQVQ4jY3QT0jTYRzH8a9d0m1M8rbMZklQbjRDOpSnHXSTjpFHvVgH0UODwShJWn8gGXXRi6Q1lIpfWYwCYZkQwWqHdhrYH/UwgxmzGU5sv7Hf3h3CJ3U5+sJzeL58ntfzfR4REbHZbPZgMHhL+8+ampp61Nvbe0lE9ondbj+SSqWW2VWRSIRAIED/wABjY2Osrq7ujhAOhyclFArd3d5cWFzE4XQiIjuWtbaWN3NzZYhMT08/39qUSiU6PB5EBLPFwp3hYYaGhqgxmRARvJ2d5YCmadrWxjAMfD4f7e3t3B8fVyG3242I4GppwTCMvYHtFYvFGBkd5bLPx2G7HRHhRHMzuq5XBpLJJGfb2tTbzRYLFqsVEaHZ4agM5PN5TrW2IiIcrK8nGo2ysbGB1+tFRHA4nZWBRCKhbvb7/Sp00uVSE1T8xA/xuAI6PB4ymQzjExOICFVVVVRXV/N6dnZvYD2X42hTk0JqzGZEhEMNDap3PXjzX0BJNeLxOG63mwN1dTQ2NnJ1cJB0Os2Fri4CgQCGnoO1edhcUcBT9Hn4dA8K6wrK/syhF4plb+b7W4hdhPc9CngGRfg8AjNnIHEF1j4Chb+HjCJsLsPSQ3h3HpK34cvoH6Cvr69fBX8kYO4cPDGBZoaXx+DVcXhRD5oVZk7DtwjoWeAX+XxeFxHZHw6HJ3fNCZnHsHQDFq7BygMwvu5IZLPZte7u7p7fLX31eStakCQAAAAASUVORK5CYII=",
    },
    {
      name: "天猫",
      url: "https://list.tmall.com/search_product.htm?q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAQElEQVQ4jWNgYGBg2MzA8J8czADTvIOB4f9+EvEOmCGbydAMwxgGEAtoZwA6RtdA0AujBgxLA4hOyhRlJkqzMwCOOAUjv7eE+gAAAABJRU5ErkJggg==",
    },
    {
      name: "值得买",
      url: "https://search.smzdm.com/?c=home&s=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACQElEQVR4nG2ST0iUURTFf+d9g2V/NKSgRYSriLCZ0jLie+Gi3LWqoKCFEYG0tHBTREgQSLWQCIRoWVCbKKKC/oD0fVGG5Iy2KDCiRQTBUBJh+vluC2dkHDurxzvvnnvuuU/U4H1X17ooy16Y2QAAUgfwEedWyawH6MknyefaGlc9FON4CFiH1C7nHkjaXEjTi5Juy+wm4Amhpej9rWUCRe+v5NO0L8qyu4uMdB3AYHZtFDVKinHunaBY8v7ZUgdmW8e7uppcLre/ShgMAwh2T2fZDzNLK9RQMBsoen8EwI3v3dsm6eDOkZGfYX7+PmZfgIvAyep0SI8Nphe7Sq8E3QDORdFEzUgHkFqBAUEGQAinsxD6CknSXDs7Zm8n4vhQNcQ/1CGfJKtL3hvSnpw0Vs8bDJnU7xbyUnfJ+zMG56sPJuN4s8FVpBOSNtYLSFpj0OkW3Nh34FqUZcOYXV45O9scYFAhTLlyeYXB14rtl0tEwDmgAEwBtL15U0Y6t2V0dBrp2Bw8DC0tf4EblZrbdUYm3fYkmay3V/T+iEGIzDKDe4LBUhzPVbJRPkkEFAL0C6DkvVVquw0OyyyYtB44YHB8R5I8Le7bd4oQLlXzMLOZQpo2OgBXLq+oJNvuzO4ibSokyVGg18GTkvcms5s1YfZGudyGSg4L+NTZ2TTT0PArnySqcbR0dWa/JZ2dC+FRx+vX35YIVFHyfgJoq7u+Y/ABswuFNG2s28T/UfL+gZm1CrYBz2dnZg7vGhtb9uH+Affd7MpRvsLpAAAAAElFTkSuQmCC",
      blank: true,
    },
    {
      name: "当当网",
      url: "https://search.dangdang.com/?key=%s",
      favicon:
        "data:image/x-icon;base64,AAABAAEAEBAAAAAAIADzAQAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAbpJREFUeJylk0ssXGEUx39zZ+a2g1QX7DxjMwzKJF2IR0iEWIxlV6KZeGQaEhZWbHRTsVCPJq5IG48IiYiFErZNmngUCYmgqGBFMljWq2Nx6l7XXAvxT76c73z/c/7fOd/DBhDyuqcAH0/Dd9vqVrmiJ794CZ29Bp2TB/NrYgHiEqBLA5frLsIX8rqnFH3nji9QUATdfULn5oOqQkys+K2fIL/Q4P+LKPq0vgaWF6EhIL7TKVZVxVZXwMoS1L439WELed0h3XM64eoKJqYhOcWI2tyAto/we0v4e1BMXm0drGxK8p89aGmCo0NI9cDwuLTwAEYFJWXQ9hnOzyDgh51tI8qTCdo3iIyCdz7Y27UQcDjg+jpsBx2JSTA5C1oPfNUsBHLy5OQf4uYfHOzD5DjM/YCICCh4q9MOfdalSRVWmJsRgZNj8GSYKCOj8QNkZllUcAOnQVDsEBcPZ6ePCMz/lPEY0tIh+jV0tpuWjWssLoVfG7CwLmXePSCXC95kw8AYXF7CyKBJwDhEd5qM5law2+HiLwSD8pRVVZIDflhbDRMI/4mVVeCvgVfR0v9AP4wOWzU2ZIPnfedbccyGGmWXmM8AAAAASUVORK5CYII=",
      blank: true,
    },
    {
      name: "1688",
      url: "https://s.1688.com/selloffer/offer_search.htm?keywords=%s",
      favicon:
        "data:image/ico;base64,AAABAAEAEBAAAAEACABoBQAAFgAAACgAAAAQAAAAIAAAAAEACAAAAAAAQAEAAAAAAAAAAAAAAAEAAAAAAAAICBAAAIiMAABwiAAATEwABIz4AAx0+AAAyMwAGChIADBQiAAAnKwALEh4ACBYWAAAwMgANGjMACAwQAAwYKgABHyAAAwsLAAEzPgABKz4ADh47AAE7OwAMEBYABgwMAAYIDAAHIz4AACwsAAAkJgABFxcAASc+AAcfPgABNTcAAQ8RAA8XJwARGCQADhIWAAsbNwANDxQAEBwwAAA3OwABLz4ABis+AAU7PgAGJz4ABRYWAAYPEAAPHTcABTc+AAUvPgACBgYAACAiAAQjPgACID4AACouAAAqLAAKDhQAEBosAAAMDgAEMz4ACx0+AAE7PgAMEBoABgwOAAoKCgAALjAABCYoAAQnPgABNz4ABT4+AAQNDgAMID4AAT4+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AQUREREQqQxIoKDApKysZGT5HR0dHRzw8QxIoExMdBBkUIEdHR0dHPDxDEigTEx0rOzsYBkdHR0dHPEMSEhMTKTs7HjgnR0dHR0c8QxISKCk7OzsNFUdHR0dHRzxDQxIwOzs7DTEAESA5MQM8PENDEjs7Ozs7RUdHR0dHIBwcPBIoOzs7OztFR0dHR0cDRzxDEyg7Ozs7DkdHR0dHR0dHPB0TKDs7Oz8BR0dHR0dHR0QdHRMoGTs7OyERG0dHR0dEBAQdEygTOzs7OzshGBwfRDQEBB0TKBIdOzs7OzseLggFNAQEHRMoKBITOzs7Ozs7BQU0BAQdExMoEkNDKTs7OwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=",
      blank: true,
      gbk: true,
    },
  ],
  knowledge: [
    {
      name: "知乎",
      url: "https://www.zhihu.com/search?q=%s",
      favicon:
        "data:image/svg+xml,%3Csvg t='1666873123741' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='15646' width='32' height='32'%3E%3Cpath d='M539.101 769.844l-76.117 48.43-96.094-151.063c-19.842 63.221-52.85 120.174-96.455 172.482-18.128 21.78-36.977 41.396-58.667 62.004-6.99 6.629-34.947 32.332-39.592 36.976l-63.762-63.762c6.268-6.268 35.489-33.143 41.26-38.6 19.391-18.398 35.85-35.623 51.497-54.382 57.089-68.452 91.54-144.75 96.365-235.884H117.749V455.86h180.373V275.485h-39.14c-31.07 57.089-70.256 100.198-118.055 128.832l-46.356-77.29c62.905-37.788 109.351-117.423 136.993-241.7l88.023 19.57c-6.313 28.544-13.664 55.33-22.051 80.402h203.506v90.186H388.31V455.86h112.733v90.186h-104.39l142.45 223.799z m173.068-3.157l50.325-40.268h76.749V275.485H658.869V726.42h33.189l20.111 40.268zM568.682 185.3H929.43v631.307H794.15l-112.733 90.186-45.094-90.186h-67.64V185.299z' fill='%230E87EA' p-id='15647'%3E%3C/path%3E%3C/svg%3E",
    },
    {
      name: "维基",
      url: "https://zh.wikipedia.org/wiki/%s",
      favicon:
        "data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACKklEQVR4nM2Xva3yMBSG3xPdBai8Ah0WS1iUiCYbeINITBAWyApImSAjuKOgSUYwFRv43ILryCR2IN8VN58lGr/E5zm/TgiR5Zzj2P5vV5ZlNNzrNz5l9BVMtoTx0Gb214aHa3EAWiL84Vo8AosDfAHAbrfD7XaDEAKr1aoXu64DAFwuF2y326R+PB5RluWTfr/fsdlscDqdRs92XYf1eo3z+fxoB/8rioIBMBExEbG1lkO9rmsWQvR6qDnnWErJRMRVVY20siyZiFgp9bT/BGCt5TzPkwZCSAAjzT87BA/h27ZNA3gIb6BpmiiEBxx6CoDruh7931rLSik2xoy0EYBzjoUQDICllFEAKSUDYCFE760xhpVSUe+bpolGLAlQVVXv5TBnzjlu27aHFEKwMSaZMh+xPM/fB7DW9l6myLXWPWSe5yyEmASIpSYJ4L1MdUOYcyKKFlcYzVhXvAQIi01rPamHtRCrp5T2EsD3NRFxWZaTaYgVrFJqMjUvAZqmYSJKdoQ3npobAJLRewvA5zBWjMaY/nCvh1Fq2zZZ+bMAvKfDIRP2fJgGX4xa62RhzgYY9rxS6iklfg54CD/33zn7LYBw/vvDw2hYa0cFmZqi/wQwvKRid0R4h0gpJ1tvNsAwzFO1krqOfw3g3KPai6JI6v4OmXPm15zXp6IosN/vk/rhcMD1ep1z5OPL6Me7P19ZltHiL6X/B0Dsq/Xjhn9sRg1/qiZijn4DhUA2yPD/DEEAAAAASUVORK5CYII=",
    },
    {
      name: "百度百科",
      url: "https://baike.baidu.com/search/word?pic=1&sug=1&word=%s",
      favicon:
        "data:image/svg+xml,%3Csvg t='1666880462710' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='36406' width='32' height='32'%3E%3Cpath d='M226.522 536.053c96.993-20.839 83.792-136.761 80.878-162.089-4.758-39.065-50.691-107.346-113.075-101.952-78.499 7.036-89.957 120.445-89.957 120.445C93.748 444.857 129.764 556.857 226.522 536.053zM329.512 737.61c-2.848 8.175-9.18 29.014-3.686 47.173 10.822 40.707 46.168 42.55 46.168 42.55l50.792 0L422.786 703.169 368.41 703.169C343.952 710.473 332.159 729.468 329.512 737.61zM406.537 341.666c53.572 0 96.859-61.646 96.859-137.9 0-76.12-43.287-137.767-96.859-137.767-53.472 0-96.892 61.646-96.892 137.767C309.645 280.019 353.065 341.666 406.537 341.666zM637.241 350.779c71.598 9.281 117.632-67.141 126.777-125.035 9.349-57.827-36.854-125.036-87.544-136.561-50.791-11.659-114.213 69.688-119.976 122.757C549.597 276.803 565.779 341.566 637.241 350.779zM812.666 691.174c0 0-110.761-85.701-175.425-178.305-87.645-136.593-212.177-81.011-253.822-11.558-41.478 69.452-106.106 113.375-115.286 125-9.314 11.458-133.813 78.666-106.173 201.423 27.64 122.69 124.7 120.345 124.7 120.345s71.53 7.036 154.519-11.524c83.021-18.428 154.484 4.59 154.484 4.59s193.919 64.929 246.988-60.072C895.655 756.037 812.666 691.174 812.666 691.174zM480.881 877.253 354.807 877.253c-54.443-10.855-76.12-48.044-78.867-54.343-2.68-6.433-18.125-36.317-9.951-87.109 23.52-76.12 90.627-81.614 90.627-81.614l67.107 0 0-82.485 57.157 0.871L480.88 877.253zM715.674 876.382l-145.07 0c-56.219-14.508-58.866-54.444-58.866-54.444L511.738 661.49l58.866-0.938 0 144.199c3.586 15.345 22.682 18.159 22.682 18.159l59.771 0L653.057 661.49l62.618 0L715.675 876.382zM921.051 448.006c0-27.708-23.018-111.13-108.385-111.13-85.501 0-96.925 78.732-96.925 134.382 0 53.136 4.489 127.313 110.695 124.935C932.677 593.846 921.051 475.881 921.051 448.006z' p-id='36407' fill='%23008bdd'%3E%3C/path%3E%3C/svg%3E",
      disable: true,
    },
    {
      name: "百度文库",
      url: "https://wenku.baidu.com/search?word=%s&ie=utf-8",
      favicon:
        "data:image/svg+xml,%3Csvg t='1666880462710' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='36406' width='32' height='32'%3E%3Cpath d='M226.522 536.053c96.993-20.839 83.792-136.761 80.878-162.089-4.758-39.065-50.691-107.346-113.075-101.952-78.499 7.036-89.957 120.445-89.957 120.445C93.748 444.857 129.764 556.857 226.522 536.053zM329.512 737.61c-2.848 8.175-9.18 29.014-3.686 47.173 10.822 40.707 46.168 42.55 46.168 42.55l50.792 0L422.786 703.169 368.41 703.169C343.952 710.473 332.159 729.468 329.512 737.61zM406.537 341.666c53.572 0 96.859-61.646 96.859-137.9 0-76.12-43.287-137.767-96.859-137.767-53.472 0-96.892 61.646-96.892 137.767C309.645 280.019 353.065 341.666 406.537 341.666zM637.241 350.779c71.598 9.281 117.632-67.141 126.777-125.035 9.349-57.827-36.854-125.036-87.544-136.561-50.791-11.659-114.213 69.688-119.976 122.757C549.597 276.803 565.779 341.566 637.241 350.779zM812.666 691.174c0 0-110.761-85.701-175.425-178.305-87.645-136.593-212.177-81.011-253.822-11.558-41.478 69.452-106.106 113.375-115.286 125-9.314 11.458-133.813 78.666-106.173 201.423 27.64 122.69 124.7 120.345 124.7 120.345s71.53 7.036 154.519-11.524c83.021-18.428 154.484 4.59 154.484 4.59s193.919 64.929 246.988-60.072C895.655 756.037 812.666 691.174 812.666 691.174zM480.881 877.253 354.807 877.253c-54.443-10.855-76.12-48.044-78.867-54.343-2.68-6.433-18.125-36.317-9.951-87.109 23.52-76.12 90.627-81.614 90.627-81.614l67.107 0 0-82.485 57.157 0.871L480.88 877.253zM715.674 876.382l-145.07 0c-56.219-14.508-58.866-54.444-58.866-54.444L511.738 661.49l58.866-0.938 0 144.199c3.586 15.345 22.682 18.159 22.682 18.159l59.771 0L653.057 661.49l62.618 0L715.675 876.382zM921.051 448.006c0-27.708-23.018-111.13-108.385-111.13-85.501 0-96.925 78.732-96.925 134.382 0 53.136 4.489 127.313 110.695 124.935C932.677 593.846 921.051 475.881 921.051 448.006z' p-id='36407' fill='%23008bdd'%3E%3C/path%3E%3C/svg%3E",
    },
    {
      name: "豆丁文档",
      url: "https://www.docin.com/search.do?searchcat=2&searchType_banner=p&nkey=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACsklEQVQ4jZ3SWUgTcBwH8H+QeDCpLUXR2vKGyZzHFuq8ErMi1PBK01LSBKdplgeYCPWQZWFgGV2GQhbpQ4XNSs3l0XRTZ+pm6hRiTtnmXOKZZfv2EstSevD3/P18H778CNnmOfmYHSSE7NquJylVjq1O3pTQbWH3Y7YpZcNBhn1uFpz/5SzNdhOGOZXQTa2Ji60XJdgr3ibndBWjtXKSi7Ju33lCCHWTsnY28Uoud3tyo5Oruv/Jb/VO/4Hlsj7Pn8VSD5SM+KB83Ae3J5lIr2Z2bcLc41YZtYrAtc7FaPTqz6JPx4dkNg3CmRjUjnFRKHZFUgcb2SNchJ13ufUXZvJMj76a8YfmRwOWvg9ANlcE2VwhZPqLGNJloXM6ETWjQeB3s5Eg9Qcz1D5uozcpf+0+Il6IhELfhKn5z5BqL6BPm4ZeTSrE6kQIp6LwXBGJq4P+yO7mGWh0mrtRO3ma8xpVAeiYiYZcVwOFXoCB2TyoV5qhXHwG3eoHKBcFqFdE4NqwF3JbuF8pFIq1sSD0BDWzeS4EzcrD0K/JAAASdS4AYG19HdolFQCgS12BkgF7ZApYGkIIzVgQdoqW16jh4eUkD+plMdYNK2hTpQIAZLoGNCjifxfcQ26PHfhNbL2lJbH6M2CgRVTtBAvVI87QrkoAAIIvcQCAIV0d6sajAABC1SOc6WCAX++tIITs3Dgi7fJbx/kK+V50Td+FfFaIx6MHMarrxouJK7gpDYdcK8HDwUvg97ERUeBSuekHAk7uKbo+xkKByAH5H+koFrsgt8sBWe1uyGhlIaHRFSltbOQLgxaodub0rV53R2yp3dNSOReZIi5S33OQ9I6D2CYOYgTeSBP5oUh06Jt7kE3kVth4wcmMgrw3Icr8/iPI6Q9HVk8gzrUHGNIfhLTs97Dx/Tf/C0aUi3kge/guAAAAAElFTkSuQmCC",
      disable: true,
    },
    {
      name: "爱问知识",
      url: "https://iask.sina.com.cn/search?searchWord=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACRElEQVQ4jY2SzUvTcRzHv5dunjqEHWJrzqVGPqxLeUkR/4PPd79Nk/QgFV6GWmhRoCAooWaSumUpiVD0DBVIUkqkl/UA5W/zYU0z0HBqkaZzk1d/gM56nz+f1+X1UmqXuYwKXFKCFhdaG7g9Hna727Hs7Gyn6DKczsbA7T4z9mzoY/jp8MRcXcODgEjVvyEilRQXt5Nmuc6pwkG6+r/iG1ikoPgRx080BUXOJoeIlGM/VB8+mt6J2rcfW0YP+YUvOFn0kvyCYWw2PwcPFvm0W3aHiFSSmV6NRwz+RHrxiMbiuIXD8RBLVhei3YgW3JIMoDWlWlgPPyFu3mBj1o/WgiEajwi/pvtILNxLDnBpIRr2EzebYLIDgq2shduJB30Q7gSzjVioA3ElARjiIREdgm8DEGwmMeljfbaD7Zl2CHYRMx9DdBwxkii1plqthgjxpS/E5rrhczeEOtkONcNEB6yEcGsh1Wq1JjWhlEoREe70XBr4NP586udyID4RGJzq7akb0FqjlErZ61kppZTdbs9yiUaLUCpChQjiLvm/EpVSSotws3WY2JEstmzHiOTk4a/xzYih94ZUVXm92lVOS0v/+shohLHRIAlbLuNvTMbemjRcu78ucm6vEktpbevn9Yi5NT2zycz3BVbTclic/0FkbpOh0RCNV+9GzkgSC2II7z68Z2p+kd8J2EhzQmYqK/ZcVteWmV2aZuKViXiSpix4vV5qay9QerqMhQOO6ELe4e1ZS0b04pVaLtecp766bkdIfwF25n38sMbXHQAAAABJRU5ErkJggg==",
      disable: true,
    },
    {
      name: "萌娘百科",
      url: "https://zh.moegirl.org/%s",
      favicon:
        "data:image/x-icon;base64,AAABAAEAEBAAAAAAIABPAgAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAhZJREFUeJyN011ozXEcx/HXOc7mnON4mM0Wo7V5ahJtaTIkuSFFQnGjFrmRxIVy48KN5E7K0412Qx7WmodyQexCuSCxhRUlDzPLtrOj7cw5/n8XkzO2C5+736fv99Pv/ft9v/yr96bJSo7zIZQUioy1ouOKHjrpjjNCVX/57Za4oA9Txtqjabdt9kmdOrPVapKS8EOvK54KTDGEwByBapN1KJKS0m6XphjIalSsQajYiIRhxJWq1eexNnERk5yU1CLpnk++KvVtIsZlQve1uSV0aIwf0eyzZ3boVDIeYbQoqsU6GbMt0q7RR6026LdZaL6MTfKKRFHqgfW2mWdw9BGfWOiSTl+0yTvsuddarTRsqX4HRQ2qttERszSql7HMA9sKv9BlldB0m9TYq0G5i3qcFsgoMijmvrQZ7qrS4LmELgMmQ+w3QKWoPl1KVEuLa5HVpNiAwEzDDhuSMCjw3UZDipQJCwF94kK1XnmjV6cae+SFKuSkZe1TJyIAB3BepYieAkKAEjftNNVua/SbKSnvqx6BuHNuOOeqy84aUCanXEJ3ISAuLy9lru9iBqStENNhuVCIGV6a6q2cXt0q5MTU+lJAWOqRF4676pScb9KOqbTfW91CzHfdSh2g1WrF8hb7XLjBWu0qbJWxwIj1KhyyxTXbf6/OuzHLlTVH1AcRP8dP4kRqdtQT5X/Od9S77sT/Nf+HfgGu7K8KC1PzBgAAAABJRU5ErkJggg==",
    },
    {
      name: "知乎 (搜狗)",
      url: "https://zhihu.sogou.com/zhihu?ie=utf8&query=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACk0lEQVQ4jY2SS0hUcRTGzyLcRI9Nm8BlbaqFm9xFi+hhm9EgrVZBUETOI3VsUGeiN/RGAqFyGmcRFCFUFJRFWCs1k3LunZnGbOb+73W0ssfo3HEG+7W4E4iBtPjg4xz48Z2PI7J+Z4Psj/ZJ/Z0+qQ//v/ZH+2TX+YjIvmi/nJtBQhNIu4UETMcHraUVyiKnvyPSEHkhQQtpjlN5JkXrw0mkSUcaNcSjI81xxKc7fqFaEkjQRKQ+3CdBC3FrnHv2hUS2wPauDDXditqoSeXZMTZeGWd3WOHqMXH1mGy7abD6ZAppM8qADotlLXGG0nmGzQL54jyTv0oMpPPsDRv0j82ifpR4a9iMKBuAmrCJNKfLgFbFnogipmwqWuI8iuXwPMgiR2KIT2fEtKmNmMjRGOLVGVY2e6LWAkC7SfW1cdaeSiGHPvAiOcPBuxZyaBRx67xTNq4e0+nleJy3yqZuMWBV6CM7bitc3QptskDn62lqbxlUXR5nIJOnLmoibg1pijP8D+CEwhU2GMjYDBo2dvE3+tQcA2mbM8+/8ObTLLU9SwGCFuJPIG6NFW1JdNNmw6Vx5PAo4nVOWDpB0EJaE4hHZ8uNDKXiPPeGfrI8kETcGu+UTU1YOSUe1RjM5BeV+Bfg1rg//JMnsRxPYzl63/+iwqujT87R9HiKNYEErrBiKldyEjQtBDRq7L5lAFDdmWZlIMn7TJ7N1z9z8eU3coV5UtkCI2aBV6lZqq6nEX+mDAiYbOlM8yNXorN/2nldn866C2NUnk0hxzQuvvyKpzfr7LzlV+5QiByI9kvHBJuufmZrl+Es/AnkRBJpXuD9CcQXR/xJpLWsUBaRXecjcnoaCRhOpHbDIS/W4nkoi7TEi38AwHibcZoJerYAAAAASUVORK5CYII=",
      disable: true,
    },
    {
      name: "Quora",
      url: "https://www.quora.com/search?q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADQUlEQVR4nO2WXYhUZRjHf8+ZzS0Jw9oUtMSa2V0TI1MJwqiETSzNWnFnxkzpoi5CSqKLCIwGL2Shqz4uFvoAtZCZYEet9GI1Ay+EDRQ1ktWZvNiIVNA+2V3dc/5eNDvunPPOeLS9Uv9X5zw8z/P/vec9vM8Lt3Szy+Im7kkx5W+PTnyWCRYYTBc0A2cMymb0kaCYHmBgQgEKj3OHzvGOxJvA1Ks0k6A4yWPTqlOc+N8AhRRzJfKCedUC4yjGF+bxEz5DwMxALDfjZYmmStMhYGOmzKfXDVBIMVdwUOLuarLHxzaft9Jf40fykywMoI9xX8kz3k2X6L5mgN453HNplKMSM8eFD2ZKPGWGGkCvDMSuGgOPlzKn2FGvxnMFL15iS8gcS7C5kTlAusRujCM1QfHhtw/X/3ciAMUUSYPXQuEL9ggHGplXQY1ijb+4959h3o4NcBEyim7NYde+OwECfowExZrYAIhnHXnlOOYVlRw9Hyy00x4PAGaFAwZ/xLY3/nSF5TM7HoAxPVJsDMf1b064c6VoXzeAOB9lojkuwIiY4oqbcSYegDHogLorLgDelYNrvG5r4rQr3hT14nvgsRBUcuwx38ZzCnjFoBW4U/ALRq/Xwrb0IYYsYFrExRjszFIi5+INEyWip5bgUeXwdrUzA5/diC6J+RIpxFICenSW/uIcZgcBixwmn1mOwPUFIgCrBzgG9IYIWgpf8cQLA/wmjw0Y3Ubt2BXMGxllD2JpzeKNc02T6XGZQ51ZsDPJ/SNwXFzZe4N9mTLPjL0feJrbz/7KdonVDZrLS7C86yR76+U4Z8GLZQa9BM9XxioAgo58im7l/qtZ8gPD0+5jHXCsjrlvxoZG5pW8+sq38qTEDsSMaoHRr8p9wIy/NMoKiS2Oxp2ZMjurC8jh8T4KD7Sr3oi+aaPlX58Pxl84Ysn4PFviVYB8Gx3y6QP2Z8t0XBPAmArtPCCf9cAyYIHEpEqD34GfMRZLtQeWwXdm9AewHpE0+ChTZuN1AYQ1NuNXHOcCQL6V9xSwuWGRsTBb4vCEAIRV6CKhI2yVWFvH/JNsiTei4QmUcnj5L1lj4nWMhxAJjBN49GROsnUivW7pxtFlNM8U1KJDSwUAAAAASUVORK5CYII=",
    },
    {
      name: "S.O.",
      url: "https://stackoverflow.com/search?q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACRklEQVR4nM3XXWjPURzH8dcfUVsekjuhZVa0mI3kIeUhzcMFkvJ0sSgXLpCSkljZhRQXKLlAUliJkodSyhXSPJQ8jF14KuXG04rR/i7Omf2a/2y/bf/9fet0zu90Ht7nez7fc84vk81mFdIGFHR2DOqqQXPthLxMXLz3Jf4DD/Q1wDTcRXkhAIbjJmbgEkb0N8BnbEIWpTiHgfkGGIhJie+L2B/L1ajLN8ARPMDmRN0+XI3lnVidL4BxWIEhOI4zKEIr1uEFMjiFyfkAeI2puB2/N+AeygQ9LI95ES5jVF8DwAcsxAFBfOW4j1V4HqGyKNGJKHsCsBbLEn1/YRdW4hOGoR6HcEPQhAh6sLcAw3EUV9CIbbGO4ObpeCTs/XbcwknhXPgmeKVXAKPxJJbH4zDeRqgyvMJMnI5t5qBBEGkFTvQW4CnmoipO8gNDsUVY3XXMw8aYvqMl9mvKNWBPRfgANRiDPXgvuL0a1/BMUP8iLMa7zgZKA7BEiO+J2tX8UTj5SrBGuIgI23EEs7VvWU7r8j2QsB2YH8vNeIyHgjceCsfweeFG3IoFONbVoGkAfuKLEGbFmBVTm7UIq23AHdTia48ATp2t/1NOHOTVwpaVCidgZcyrMBKDY11lbL9UiIr0ANHaXquZRF2rEP+NuJCoHxtBKmI+RdRD/fi6LKxu2p0cp1sAaexNTJfSdkwDkPb9nnPFHa3gj9I0HujWitJawT2QyfVrFsOwr//ZMjXr/36dFdwD/9JAXva8oxXcAzk10J/2Gw08e05AgXJ5AAAAAElFTkSuQmCC",
    },
  ],
  sociality: [
    {
      name: "百度贴吧",
      url: "https://tieba.baidu.com/f?kw=%s&ie=utf-8",
      favicon:
        "data:image/svg+xml,%3Csvg t='1666880462710' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='36406' width='32' height='32'%3E%3Cpath d='M226.522 536.053c96.993-20.839 83.792-136.761 80.878-162.089-4.758-39.065-50.691-107.346-113.075-101.952-78.499 7.036-89.957 120.445-89.957 120.445C93.748 444.857 129.764 556.857 226.522 536.053zM329.512 737.61c-2.848 8.175-9.18 29.014-3.686 47.173 10.822 40.707 46.168 42.55 46.168 42.55l50.792 0L422.786 703.169 368.41 703.169C343.952 710.473 332.159 729.468 329.512 737.61zM406.537 341.666c53.572 0 96.859-61.646 96.859-137.9 0-76.12-43.287-137.767-96.859-137.767-53.472 0-96.892 61.646-96.892 137.767C309.645 280.019 353.065 341.666 406.537 341.666zM637.241 350.779c71.598 9.281 117.632-67.141 126.777-125.035 9.349-57.827-36.854-125.036-87.544-136.561-50.791-11.659-114.213 69.688-119.976 122.757C549.597 276.803 565.779 341.566 637.241 350.779zM812.666 691.174c0 0-110.761-85.701-175.425-178.305-87.645-136.593-212.177-81.011-253.822-11.558-41.478 69.452-106.106 113.375-115.286 125-9.314 11.458-133.813 78.666-106.173 201.423 27.64 122.69 124.7 120.345 124.7 120.345s71.53 7.036 154.519-11.524c83.021-18.428 154.484 4.59 154.484 4.59s193.919 64.929 246.988-60.072C895.655 756.037 812.666 691.174 812.666 691.174zM480.881 877.253 354.807 877.253c-54.443-10.855-76.12-48.044-78.867-54.343-2.68-6.433-18.125-36.317-9.951-87.109 23.52-76.12 90.627-81.614 90.627-81.614l67.107 0 0-82.485 57.157 0.871L480.88 877.253zM715.674 876.382l-145.07 0c-56.219-14.508-58.866-54.444-58.866-54.444L511.738 661.49l58.866-0.938 0 144.199c3.586 15.345 22.682 18.159 22.682 18.159l59.771 0L653.057 661.49l62.618 0L715.675 876.382zM921.051 448.006c0-27.708-23.018-111.13-108.385-111.13-85.501 0-96.925 78.732-96.925 134.382 0 53.136 4.489 127.313 110.695 124.935C932.677 593.846 921.051 475.881 921.051 448.006z' p-id='36407' fill='%23008bdd'%3E%3C/path%3E%3C/svg%3E",
    },
    {
      name: "新浪微博",
      url: "https://s.weibo.com/weibo/?q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACpElEQVQ4jb2SXUiTcRTGH9CZNmeyvXO+2163tSWaFWmsMmtpSpC1EBNDJaiky0AEL6S0D4pKHVFpXmTaB5FdtIuEqBslBCMqKyNDUFKpLQ2rOb9y/s/pIlYUeBFBz+U55wfnBw/wHxO7zowNa4zIAKD6a3pPOkpG6zA+WoeJ50fwJi8VOxc91gLKzpjYwjUq1cbwLA7QbluJHVuSkespxsWpywi5HNj+JxtToZWOv7As980kp3G/1T4pAXJ42VCCpp5q9KZbkHmhFC091ej7JQgk3JLND4LJK3nckcJ+Rwr3W+yTOUuW5rvV6pIqrXRib6L6QI0bp7uq8NRlx7aRs/gc5uO9RqU76EjlUZOF3+llGjGYaECSZ/t0CV8+KTaeSU7jLr190GWM3N68H9d2rEaB34PZH6/pE9umbCt42GBmX3YezRytJXH9JoVaWjlQWcUfMjfzmKzwsySrzwDYAGCtAmdDEZqRGR2d609azr6UVRy40kJibo7eDg/Tw+5uGvT5SAhB8z4/TVRW0ZCshO4ZlccZkdFbfro36PVtAesKnrrrZSEEnfF4CAABIJ1OR16vl4QQtDA/Tx93FfC02cbdim1IA0gAgDvx0qPpfDcLIehJby9pNBoqKioit9tNKpWKnE4nCSFICEHjhyvIn2DkfqtjMqyCGrXG8y07j5mYOzo7aavLRYFAgLKysggAHSwvJyEEhfx+8m1y8YzFwU16QzuAiHBpzA+khFd88hQvBINcW1/P63NyOE6WqXDfPhqbnubQ4BB/LS7loMnC90yWHgkw/tYeCZDr1eqW97sLJ7ntBr++1MgDV1uZO+4zHzvBX9Od/FJv8FfrpHMA4hetsAVILYuIOOSREi+3GpX2xrhlt2tUMed3R0WVGYGkRcF/yXdyajYEKzT4iQAAAABJRU5ErkJggg==",
    },
    {
      name: "抖音搜索",
      url: "https://www.douyin.com/search/%s",
      favicon:
        "data:image/svg+xml,%3Csvg t='1666873215809' class='icon' viewBox='0 0 1029 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='17442' width='32' height='32'%3E%3Cpath d='M259.3792 385.3312m-170.5984 0a170.5984 170.5984 0 1 0 341.1968 0 170.5984 170.5984 0 1 0-341.1968 0Z' fill='%2303F9AD' p-id='17443'%3E%3C/path%3E%3Cpath d='M403.968 568.4224m-170.5984 0a170.5984 170.5984 0 1 0 341.1968 0 170.5984 170.5984 0 1 0-341.1968 0Z' fill='%23F9F90B' p-id='17444'%3E%3C/path%3E%3Cpath d='M631.3984 622.2848m-88.6784 0a88.6784 88.6784 0 1 0 177.3568 0 88.6784 88.6784 0 1 0-177.3568 0Z' fill='%230FF420' p-id='17445'%3E%3C/path%3E%3Cpath d='M753.0496 565.248m-88.6784 0a88.6784 88.6784 0 1 0 177.3568 0 88.6784 88.6784 0 1 0-177.3568 0Z' fill='%23DA0DF7' p-id='17446'%3E%3C/path%3E%3Cpath d='M594.0224 369.3568m-223.0272 0a223.0272 223.0272 0 1 0 446.0544 0 223.0272 223.0272 0 1 0-446.0544 0Z' fill='%23FF0000' p-id='17447'%3E%3C/path%3E%3Cpath d='M901.12 1024h-778.24c-67.584 0-122.88-55.296-122.88-122.88V122.88c0-67.584 55.296-122.88 122.88-122.88h778.24c67.584 0 122.88 55.296 122.88 122.88v778.24c0 67.584-55.296 122.88-122.88 122.88z' fill='%23070103' p-id='17448'%3E%3C/path%3E%3Cpath d='M829.44 268.0832c-89.7024-0.1024-162.304-72.8064-162.304-162.4064 0-1.024 0.1024-2.048 0.1024-3.072h-72.4992v-19.456c-0.7168 7.3728-1.1264 14.9504-1.1264 22.528s0.4096 15.0528 1.1264 22.528v576.7168h-1.7408c0 89.7024-72.704 162.4064-162.4064 162.4064s-162.4064-72.704-162.4064-162.4064 72.704-162.4064 162.4064-162.4064c36.7616 0 70.5536 12.1856 97.792 32.768v-85.0944a234.496 234.496 0 0 0-97.792-21.1968c-130.3552 0-235.9296 105.6768-235.9296 235.9296 0 130.3552 105.6768 235.9296 235.9296 235.9296s235.9296-105.6768 235.9296-235.9296c0-0.7168 0-1.4336-0.1024-2.1504h0.1024V276.1728a235.4176 235.4176 0 0 0 162.9184 65.536v-73.6256z' fill='%23FFFFFF' p-id='17449'%3E%3C/path%3E%3C/svg%3E",
    },
    {
      name: "豆瓣",
      url: "https://www.douban.com/search?source=suggest&q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACOElEQVQ4jZXST0jTYRjA8UfQNd2w3DqERIQQBmFQNPFgHVwI2SHokKTQpaB/RJvZ/JPLhWWkCcq2lCIhFILyEHaoYEr9LE1/bXMzqYOYTmeUOT2olWjfDjYV+qcvfC4vL194eR6R7Zqjkqf3SK5ubfL0HslJuCeSr1ekciNSmoAUa1bPvh6pMCJyRNcmJVqqntehjvhXLa02EynSIpKr80iJlmrFSceHLtoHlP/qGfGxs3ZvNKD3yGUDYtWw5XoaJqeZzPoD7Gs4+JsMdzYmZxYxxQakUIfYjdFAEnI+lpa+VgCmv88QmZ1k6uvUkonZSaIn3WVGLLGI3bAiYInjYfARAObbh0i+ksLmyh1Lkh1bud/bAoDJmYVY4v4e2HQ1FTkhyNkVjgt1L+v/FYil9d1TANydd6hsu0mN4qZGcVGjuHA8u4Z3tBeADHf2H75QoKX0iYPP0+MADEaGCX7sp//TewJjb/k2PwdAz4iP1KrdSIF2ZcCAFCUhZwTr40sAHG46hpyLQQr1iC0R/1gfEzMREsqSEeu6xffLASNSEI+cFrZV72F+YZ5GtRk5JchJIeXGLhZ+LNDse7B4Z4lFLiZGx7i4SLe67qKGvPSO9S2NSw15UYd7GIqEABif/oI6rKKO+jG5zIhNsxxoeN2ILxzgzaif9oEOXgx24gsH8IWDdIe8tA8ovBrqxhcO4gsHSHft/xXI1ytSbkQuxCNWzerZEhGHEZEcXZNUGBF7ElK2BuUGxLZh7icJ8DyZ0CDAawAAAABJRU5ErkJggg==",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/search/%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABR0lEQVQ4jWNgGEyAH5e4bXhCgX1ibqOVb2gCklpU9ealvRuRFMCBau3cCwxTzvxnmHbhP8PEk//1yyfvl6xb9sDGLywJRaFh/+ZTDBNP/rfOrZ8PM11VW9uAYcnj/wxr3iHwwvv/eZfc/mxkZeeEYoBvdnkdw5p3/xnm3PjP37TunXVu/XyH3LopKJqhODCrtIKBgYEHxQCDliVH4YpWvvrPMOfGf4aZVzA0M6x595+Xl1cEI6RcfIPDeFc8/oxNAzLWWHjuNq5Y4PFvmT6fkCH++dWNuAxgcPAJCteYc+Y2PttFRUUlcBrAwMDA7x4UEWUzbcchbJotbW3tcWq0zq2fz1+38h1D597/DPNvo2h2nrBmG1QzMy4DmNXU1DR8I2IT/FtnLYThkPKWTs+g0HA1NTUNfJqRAY+kpKQ8DEP9y06MxoEDAKUW4Kpi1NnUAAAAAElFTkSuQmCC",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/search/results.php?q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAl0lEQVQ4jWNgoAbQtE48bOXX9J8UrGmdeBhugEvs7P8eSYtJwi6xs//DDcCnMCx31f9j5x79//X7z//3H7//v3H3NVyOKAP2n7j3Hx2QZMDXbz///////39+3RK4/0kyAAZcYmdhyOE1ABd4/PwjZQYsWXecOANg/oUBGN8hYhJ5YYBNbjgZYOJRdZhUA8w9a48QmVfxAwATIfnUl6gLIAAAAABJRU5ErkJggg==",
    },
    {
      name: "微信搜索",
      url: "https://weixin.sogou.com/weixin?ie=utf8&type=2&query=%s",
      favicon:
        "data:image/png;base64,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",
    },
    {
      name: "小红书",
      url: "https://www.xiaohongshu.com/search_result/?keyword=%s",
      favicon:
        "data:image/png;base64,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"
    }
  ],
  scholar: [
    {
      name: "谷歌学术",
      url: "https://scholar.google.com/scholar?hl=zh-CN&q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACqklEQVQ4jYWT2UtUURzHL/QH1LMP9hKVNUKFWpP7TDrjU9uEo4WPWlERUbSoueSMaTWjTBCRGV3HiCsSWrTQApVSZBtZWEZSUWZkC3PPne3OzKeHK1NKy4Hfyzl8P+d3vt/fkSRJmpWSVbU9vbxbMZXJSnqZrMx3yErqmrN/r7V+Zf76jjNz5mYXSilZldtKfGBrA5sXcg7Dpg5wX/lzNV+FlmuwsRNy6r9HJFO5v9feBlaXILNWxenT+Pgtzr/W2Oc4azwalqMgLXZ29di9JMXj/xH3P4pybjDKhvYg1qMgpZfKyko3lPk0xr9PF7/4EOfTjwQAiQRcfqpjrlMZeBVjc2eI/FaQ5jlkZWs3qKHENPH7yTg5DYKKExp6DGJxcLRprHILAJr7w5hdIC1wyMquHmNj3/kQN57rALz9Eie/SZBRo/JwLAZAtRLC4jIA7r4pQHqprBS0QkaNysLdAXbKIQAiOjh9Gml7VOS7kaSooGkGwFQqKzYvWFyCgiZBbqPg3mvjRv9ABNPeANeHdSbVBOu8GvYWA9ByMcyKmQCLS5DToFLSKlDuR/kmEox+Moyt6w2TtidAUbPgyKUwZceDWI7MAFhdRgdL9quk7ghw8bGeNPXdZJzKjiCZNSpZtSp5jQKb9zeA1SUw16ms9WqcvBlhcDTG4KsYoxO/ohXhBFWng5jrVCwuQbHnN0B2vaDiRJCJqdzvvtRZfUyQ3SA4dSuCbtjC0JsY5npBYRLg9PfaPEYK14f15NA4fRpLD6jkHxKY9ga4PWKcvRyPk9toGF7sBWmR45S/pN0Y5a6BaLLdroEoGTUqy6oNc99NGk85dCHM8oMCqzuIvQ2k2XPzLAWNX9UiD9i90D0EE8Yo8GQc/A/g2QSMfIHaPsg9DMUe4/dmbrnz8CdxKwtDTtdexQAAAABJRU5ErkJggg==",
    },
    {
      name: "百度学术",
      url: "https://xueshu.baidu.com/s?wd=%s",
      favicon:
        "data:image/svg+xml,%3Csvg t='1666880462710' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='36406' width='32' height='32'%3E%3Cpath d='M226.522 536.053c96.993-20.839 83.792-136.761 80.878-162.089-4.758-39.065-50.691-107.346-113.075-101.952-78.499 7.036-89.957 120.445-89.957 120.445C93.748 444.857 129.764 556.857 226.522 536.053zM329.512 737.61c-2.848 8.175-9.18 29.014-3.686 47.173 10.822 40.707 46.168 42.55 46.168 42.55l50.792 0L422.786 703.169 368.41 703.169C343.952 710.473 332.159 729.468 329.512 737.61zM406.537 341.666c53.572 0 96.859-61.646 96.859-137.9 0-76.12-43.287-137.767-96.859-137.767-53.472 0-96.892 61.646-96.892 137.767C309.645 280.019 353.065 341.666 406.537 341.666zM637.241 350.779c71.598 9.281 117.632-67.141 126.777-125.035 9.349-57.827-36.854-125.036-87.544-136.561-50.791-11.659-114.213 69.688-119.976 122.757C549.597 276.803 565.779 341.566 637.241 350.779zM812.666 691.174c0 0-110.761-85.701-175.425-178.305-87.645-136.593-212.177-81.011-253.822-11.558-41.478 69.452-106.106 113.375-115.286 125-9.314 11.458-133.813 78.666-106.173 201.423 27.64 122.69 124.7 120.345 124.7 120.345s71.53 7.036 154.519-11.524c83.021-18.428 154.484 4.59 154.484 4.59s193.919 64.929 246.988-60.072C895.655 756.037 812.666 691.174 812.666 691.174zM480.881 877.253 354.807 877.253c-54.443-10.855-76.12-48.044-78.867-54.343-2.68-6.433-18.125-36.317-9.951-87.109 23.52-76.12 90.627-81.614 90.627-81.614l67.107 0 0-82.485 57.157 0.871L480.88 877.253zM715.674 876.382l-145.07 0c-56.219-14.508-58.866-54.444-58.866-54.444L511.738 661.49l58.866-0.938 0 144.199c3.586 15.345 22.682 18.159 22.682 18.159l59.771 0L653.057 661.49l62.618 0L715.675 876.382zM921.051 448.006c0-27.708-23.018-111.13-108.385-111.13-85.501 0-96.925 78.732-96.925 134.382 0 53.136 4.489 127.313 110.695 124.935C932.677 593.846 921.051 475.881 921.051 448.006z' p-id='36407' fill='%23008bdd'%3E%3C/path%3E%3C/svg%3E",
    },
    {
      name: "知网",
      url: "https://kns.cnki.net/kns8/defaultresult/index?code=SCDB&kw=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB3klEQVQ4jaXSMUhqURzH8YuBrSbiIIKIS4vo4ORQgyJCBg5Fuuqgsyh3tKFwUsjFycEIwq0lBMc7RLQFIl4RnLxXzqbe4Yp0v28I6vle+F70h99y4Hw45///S9SO+Ukkasf8XovFgkKhgCzLrFYrdtZXgBCCw8NDbDYbnU7n+4Cu67hcLlKpFEKI7wOPj4/Y7Xaen595eXmhUqmg6/r/AUIIQqEQBwcH5PN5HA4HTqcTVVW37mma9t6fP4GrqyskSfqIx+Oh1+sBsNlseHp6olwuE4lEuLy8/BsYj8fc3NwQCATw+/0Mh0NM0+Tu7o5Go0GhUKBerxMOh4nFYl/3wDAMms0mPp+P+/t7ptMpXq+XYrGIaZqs12vOzs5QFGUbGAwG9Pt9FEUhm80iSRJHR0dMJhNOTk6oVCoAtNttzs/P2Ww2n4CmabjdbhwOB7FYDL/fjyzLCCGwLItSqUQwGKRarbK3t0c6nWa5XH4Cs9mM09NTcrkco9GIWq3G7e0tlmUBMJ1OiUajxONxWq0Wqqry9va2/YXFYvExynQ6zfX1NZlMhvF4/HFuGMbuPdA0jWQySbVaRdd19vf3ubi4YL1e/3uRXl9fyefzJBIJ5vM5AN1ul4eHh/fn7gR+kF/ZQQ/WnEhepgAAAABJRU5ErkJggg==",
    },
    {
      name: "万方",
      url: "https://s.wanfangdata.com.cn/Paper?q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJ0lEQVQ4jdWSvY4BURhAPwoS8TuTqESC3lN4DZGYVqGTaPQa4g1UYjqxdN5EoURI/CQ0M9/ZYnYya9fsRrHFFqe5Jzm5936ftEXatog9EZm+ii1iy1xkQbUKlgXNpodlQb0O8TjUao/O940GJJPIRGRKr4fCd0wTXa2eO4BK5SPQ6XiHqh6Ans+oYaCz2aPz/e0GpdJfBk4nL7BcPn+C60K5/MsNTBMdj9HDAd1uA3Y7dLOBYvGHwPWKFgqoSCiI/BC4XNB8HrUsdDRCB4OA4RDt98EwwgOcz2guFzpG/sEYXwp0uziuq59x73d1DEOdxUK/Osd11XUcDfag1UKPx2DO+z2s194nhuwB/h7MRd6IxSCbhXTaI5OBVAoiEUgkHp1PKgXRKO8NfBp7UCxd2QAAAABJRU5ErkJggg==",
    },
    {
      name: "EBSCO",
      url: "https://web.b.ebscohost.com/ehost/results?sid=8e76c941-084d-4b93-b05a-d5f182196017%40sessionmgr102&vid=1&hid=128&bquery=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACJ0lEQVQ4jZWT3UtTYRzHT+w4pzddeRFdBAbd1Z8giXtJz9mKvBDCxMqkrK57u6kEyx13zjHWIl8TEbMptaLpZMeMCgdBS8dSRC8WWAS9UJRS1j5d7AWnjuqB78UPHj58n+f7+wpFLp0il45Z1hBs7nVS0krPdoXM/YyEIpdOgaRSWt/JGZ9BvWeUOiXIUXWMxvZxGrQQTd4wTd4wrkv3sDh1LOsBYpVKaX0XPaEYmfPx6wqHlSAHLt/nlDdMZO4tyWSSHXUdmKrUXECxS0eUVIS9V3kYWQTAiCYQKlpT1itaESs9BKYWqHU/QrApuYDsYFMYnJwF4PH0G0RJxeLUKJQ1BKubbYdusvNIF2ZZzQOwKww9mcsCTJKKKKmU1PgoPzvElkoPBZK68RM3AxjRRMp++TWO6yFGns3nT2EzwIcvyzyILBB+mWD1128GJl7nvP2vgOjie6zn/Ow77+d5fInhp/P/BzCiCQSrG6GsBfsFP/1GHMHRhsX5j4BMCoWyxtaD19l1rBuzrGGWVYr3t+cH3Jmc2xijU8NU5UFwKFwZmGLPyb7sMmUBZllDKGvhbtrBxKv0ItmVlMpaqG4O8O7TN7bX3kKU1gDMskZJjY/G9nG+r/wEYPnHKg1aCMfFYaqbA6gjLwCYX/pMYdpVFmCq9LD7xG36jTg9oRgdwWm6x2L0heN0js7QOx5jcHKW3lCM0zcMxPVdyKmzdY3SFc6ptKMtJ4U/fkBXz/LD6BYAAAAASUVORK5CYII=",
    },
    {
      name: "WOS",
      url: "https://apps.webofknowledge.com/UA_GeneralSearch.do?fieldCount=3&action=search&product=UA&search_mode=GeneralSearch&max_field_count=25&max_field_notice=Notice%3A+You+cannot+add+another+field.&input_invalid_notice=Search+Error%3A+Please+enter+a+search+term.&input_invalid_notice_limits=+%3Cbr%2F%3ENote%3A+Fields+displayed+in+scrolling+boxes+must+be+combined+with+at+least+one+other+search+field.&sa_img_alt=Select+terms+from+the+index&value(input1)=%s&value%28select1%29=TI&value%28hidInput1%29=initVoid&value%28hidShowIcon1%29=0&value%28bool_1_2%29=AND&value%28input2%29=&value%28select2%29=AU&value%28hidInput2%29=initAuthor&value%28hidShowIcon2%29=1&value%28bool_2_3%29=AND&value%28input3%29=&value%28select3%29=SO&value%28hidInput3%29=initSource&value%28hidShowIcon3%29=1&limitStatus=collapsed&expand_alt=Expand+these+settings&expand_title=Expand+these+settings&collapse_alt=Collapse+these+settings&collapse_title=Collapse+these+settings&SinceLastVisit_UTC=&SinceLastVisit_DATE=&timespanStatus=display%3A+block&timeSpanCollapsedListStatus=display%3A+none&period=Range+Selection&range=ALL&ssStatus=display%3Anone&ss_lemmatization=On&ss_query_language=&rsStatus=display%3Anone&rs_rec_per_page=10&rs_sort_by=PY.D%3BLD.D%3BVL.D%3BSO.A%3BPG.A%3BAU.A&rs_refinePanel=visibility%3Ashow",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABr0lEQVQ4jZ2TPYobQRCFvyNUMpGTjgQbGAqBEZs1i5AD4VWzBoNgF1cihB0NONyk1/mgEwxzgmFuMHMD6Sa7RxgHQ8uzI+HAFRXUT79+7xVMQjPUO/zxFyfv8ONcM3Tafw4nuHZPlxZM62lBu6dzgrsYNsWKNQcA/YAW9xyKew5xSSy/UhWfh1qx5mCKvVsS74ivz7wB2CcsrogAAiIgmqGmWP+bHuD1mbd4N/RgitVbGic4zdBwQxAQm2NxSSwfqI4/OYUZwRSrv9FohtZbGlOMckPVv9ALSP1IAxA+EsYQNUPTYPs08NS/0JcbKvIFeZgRNEM1Q53gwg1hSqIpZoqVG6roiWFGyBfk9JG+j/Te4cOMkN+SX5PLO3x+OzzmHT7NnRFETyw3VKZYviC/QDAfmE9IzwgSB+P/HXecxiic4GyOAdSPNAJy5mCsQvtEFz1RM/S451RvaeKSmIZtjnmHF5CzClMftN/pTDHN0OQDgLj6u+idD5JMyYkCUj5QFevBhcUXDnE1oBKQ5MQLop3g2h1dgnlNBZtj7e7KLYwjHVP7gy5dY8r/eY3/G38A1vO4VlociLQAAAAASUVORK5CYII=",
    },
    {
      name: "JSTOR",
      url: "https://www.jstor.org/action/doAdvancedSearch?q0=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADl0lEQVQ4jS2RS0zbdQCA/3cvJh71ollMICN0FhpwbBlZx+Zg0NdC3/23pbQ8B91YGQOtCAOZJQrIaillLVDgJ6+BPMTJU91Bl7mwOBQQjEuGzJMHTbx8HvD+5Uu+fFLGSy/XlipVQlaohC1NKeT0TOFSZgm3MlvYUtOF+ViKMB9LEbbUdOFWZgk5TXnEKVRCTkkTkkeRMb/cEGS+sZb1T5r54sZVRpwuhq1ONsUU+6tr7C2v8jg5TtLh5uv2Bta7mllqaWDRX49kS1OKe9eqCBvP0u+8RNynI+rIp/nEcdqyT/HX4Qv+/fsfomYnd4xq4j4NAyWFDFboSJjsSLbjSjEbqKXPdpGBEi19lgJWoteZD1XRVZTD1uoyz59uM1hup18uoM9eSMSSz0CJjmGHG0lWqETCZKfPns9Mq5fuwrOETRfpNeQRNqp5srjEwdYO4zfKGasz06vPY/ZWGZ3nThHTWpBsqQqx8tF7DFYYmGnx0u8o5MPT2UwFS2jPUbI5t8Qf27vEnBbW4wG++tSPCNiZft9DTP+/YLUzyFCFHlHvYK6jgpD6FBFrAWHTeX76coXDnT169VrmbvuYD1VyS6Uk5iwiZrAiyYpMMSK7GHAXMtHkouN0FiN+MzOtpfTocvnt4fc839ohJpu569EwVFlM3GsgYslnrNSH5M7MEuELOlpU6QyU6Ih7DWwM3iTpNxPKO8mzzR85+GWXXq2GHl0uC53VDFYW06vPY+HdAJIt9S2xGAww21bK/fA1OvNOU/vKa/Ro1ISNeWx/84DD3T367UaGqi8T9+rp1qi5/urrDFqdSI40pZj2VzHR6GC2vYzlSB3JKya+TTYx0+Zh/4eHHGztcNdtZaJJRtTZWI3VE3UUEdWYkFxKlejXGmlVKYi5tEw0ygx4tIzV2bhzWc32xgN+f/yEhM9BxPIOwzUmQuocItZ8Rj1eJGuqQiwG61kIlSMCNrouFXA7921C5zL5rDifP/ee8WhqluYTGYiAlc8bZKKOIkZqTExUVx1tvN92kz7bBbo1ZxitvcLPa+tMNtSxtbzMi1/3GaupYbLJzr0PSrljOM90sIS4V0//UUKWGHN7SZQbGKoyErUU8V0iydOVNR7dmyPhKmPEb2Ej0cjoVTsfX8il48xJxhucDFncSNY33pxfvBJg1F3GbN11kg4Pw3Y3k9V+hK+SIYsT4a1gzFNBUi5lxFXGqLuMqepaplw+/gNcwmcGmhKGRAAAAABJRU5ErkJggg==",
    },
    {
      name: "Springer",
      url: "https://rd.springer.com/search?query=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuElEQVQ4jbWRsQ2EMAxFMwjFzULHJvR0GeAaKL2GV4jEANmBiorqOipf5ejH+Dg46b5kRYLv5x8niKNl3SQSC6fs/a4UvOamG0pxyrKs231A24+H8xKg7cdi1ukKjcTngEhcjBobT72SC0ADmjA6pyxNN/gApHPKEoklElcAHYJLDRpdjXaJNrL9FjCaNnrTTwEK0RfAl7gMsCBPH3eAzfYaWN5eDgnuqgLs8ySv5+Nr7fP0J8AvegOhkGr6AYHSEgAAAABJRU5ErkJggg==",
    },
  ],
  news: [
    {
      name: "谷歌中文",
      url: "https://news.google.com/search?q=%s&hl=zh-CN&gl=CN&ceid=CN:zh-Hans",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAERElEQVR4nO2WTWhcVRTHf/e++crko/kyX201jQitIOnGhcWqUBWLSGgRVNCVFqouXFQFa0XQXRRcWBpBURRBo9JWcZGWghhqbVOK1I8uLEksmKS2yTRt5iszc+9x8Wbmzbx5mca1OfB4vHvOPf//+bjnPliT/7uoesq7v9k3o6JOn1gBBAFE3HfpG+C6FZqR8krJRhSQK8z+8eSh9SthhOoRWLTZPklaRDxIEWFagIxlZF2KRzov09/4A/suPc3ocqSCZJGOVn31MOoS8Ms8ihsGDug0j982z2DLONgomFaeWfc3o1cG/ou7mxMoiDBt4VYD77Utsrt7HEwWpAEQsC24YQpbW39h7KtOpjbGGFrvgAY0dOu6Va5PYNpqRlqW2Nt7EgoLUGgE4lCufkkEbIT471e5f0a41tzCdE+M4YE4X0bzdQnU0JOLjw2xcG6U8GyUXN29NTwWTvejvu+CmHF1YsFaQloRijeTibf/5LS2j7cd/GR/IAGZGJwnfK3j6o3nQMxN0GsJ5JcUS0ciqGil3jWyOPRcOoLWYfJNzbO6oWGs/dPDzyoAObNRMDlAg55j18+p4PMpHqb4vyVoTco6C4weayIf2YYCxJortxw/060BMOnzKO2F5C/xKsBXmSRA0IBY+ytuyKC2LWzF2LwXRjGiygfvqQSvQvBFX0m4nFFRCNB14uxDZQKu5E+txFoAI7BcAGurwQVIG0gZ9502kCoIaQNWqEmqIFhjpkouysdQ3Zt4QE51SSn6kiwsw+ieGH2dHtc9IxlmkkJIw+UsTLweJ0iOTeR443iejoiXSRB0InGgZKOrdjgeWwESOXjqLqcKHODN3Q5zy6XuriMV5VRAQUCh6Dh38YuaDABQyP9FiP5SBj54IsKdm0K8+tF1TvwTptGBRB56ItARUYhAbxQ2v5UGwIigcMuFQJMDMe1xSRpoU9Xnq5qAXR5Ds7dksqXfVR+dDbO5EXYMaArWS93YpCVn4cOhMMbW9rtSiqWMcHDcnYY5Acd3vqsIqO3p5+VH7rHCoOvAXe9wwFh4aVesavPHb6cIA9sHwzXgJRER3h/Pg0DaQiHvNXttBgDyfA0ugflFQ2erw+m0sDOiUK8kQMAMt6G1IqagKwrq5UQRzY8OhBQPt0fKRzGZyZysCjqI9aPvpATg+HXL1IthNvREsRYmZwy3b3DQCs7/meW1bw2JHHz3QgMmYHIfPZXj898MjcXmfvdw09zgWar+D3TttuIQEeHBFsV9h5ZdQw13bHTBL0xm2PGZe1NlDXS1aXo7a5+BHk2m4PkNpznvxwrMwM7hZFUys8bt/qRxO7uveNmUjC6kBFsxBU1RuSmqaAp50/PE/qYavOD/AV8tY7oa1F/qLXHPb8UFGDyuV0Ogjr2r9xn4gfyXVD1/qyewghf/vbCi+Qr7AwkowogED1kJ+JCKhaASiIBSgf2+JmvCvyV4A+6kXQlFAAAAAElFTkSuQmCC",
      blank: true,
    },
    {
      name: "百度新闻",
      url: "https://news.baidu.com/ns?word=%s&tn=news&from=news&cl=2&rn=20&ct=1",
      favicon:
        "data:image/svg+xml,%3Csvg t='1666880462710' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='36406' width='32' height='32'%3E%3Cpath d='M226.522 536.053c96.993-20.839 83.792-136.761 80.878-162.089-4.758-39.065-50.691-107.346-113.075-101.952-78.499 7.036-89.957 120.445-89.957 120.445C93.748 444.857 129.764 556.857 226.522 536.053zM329.512 737.61c-2.848 8.175-9.18 29.014-3.686 47.173 10.822 40.707 46.168 42.55 46.168 42.55l50.792 0L422.786 703.169 368.41 703.169C343.952 710.473 332.159 729.468 329.512 737.61zM406.537 341.666c53.572 0 96.859-61.646 96.859-137.9 0-76.12-43.287-137.767-96.859-137.767-53.472 0-96.892 61.646-96.892 137.767C309.645 280.019 353.065 341.666 406.537 341.666zM637.241 350.779c71.598 9.281 117.632-67.141 126.777-125.035 9.349-57.827-36.854-125.036-87.544-136.561-50.791-11.659-114.213 69.688-119.976 122.757C549.597 276.803 565.779 341.566 637.241 350.779zM812.666 691.174c0 0-110.761-85.701-175.425-178.305-87.645-136.593-212.177-81.011-253.822-11.558-41.478 69.452-106.106 113.375-115.286 125-9.314 11.458-133.813 78.666-106.173 201.423 27.64 122.69 124.7 120.345 124.7 120.345s71.53 7.036 154.519-11.524c83.021-18.428 154.484 4.59 154.484 4.59s193.919 64.929 246.988-60.072C895.655 756.037 812.666 691.174 812.666 691.174zM480.881 877.253 354.807 877.253c-54.443-10.855-76.12-48.044-78.867-54.343-2.68-6.433-18.125-36.317-9.951-87.109 23.52-76.12 90.627-81.614 90.627-81.614l67.107 0 0-82.485 57.157 0.871L480.88 877.253zM715.674 876.382l-145.07 0c-56.219-14.508-58.866-54.444-58.866-54.444L511.738 661.49l58.866-0.938 0 144.199c3.586 15.345 22.682 18.159 22.682 18.159l59.771 0L653.057 661.49l62.618 0L715.675 876.382zM921.051 448.006c0-27.708-23.018-111.13-108.385-111.13-85.501 0-96.925 78.732-96.925 134.382 0 53.136 4.489 127.313 110.695 124.935C932.677 593.846 921.051 475.881 921.051 448.006z' p-id='36407' fill='%23008bdd'%3E%3C/path%3E%3C/svg%3E",
      blank: true,
    },
    {
      name: "网易 - 百度",
      url: "https://www.baidu.com/s?wd=%s%20site%3Anews.163.com",
      favicon:
        "data:image/x-icon;base64,AAABAAEAEBAAAAAAIACtAAAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAHRJREFUeJytUUEOwDAIokv//2V3cnFUaJONUyWIaIGPGB0ZQAjxor9c8wBGbeqMXwbcHEAEEM5kdlFdZIY1ULc4MthFTywRd1N5reUXqqC7AQ9oI2Zjclwrczup1vU9lUilYDwGndBx2/gp5OjyiGoFx/+CG9j1PAn7jkYoAAAAAElFTkSuQmCC",
      blank: true,
    },
    {
      name: "网易 - 谷歌",
      url: "https://www.google.com.hk/search?q=site:news.163.com+%s",
      favicon:
        "data:image/x-icon;base64,AAABAAEAEBAAAAAAIACtAAAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAHRJREFUeJytUUEOwDAIokv//2V3cnFUaJONUyWIaIGPGB0ZQAjxor9c8wBGbeqMXwbcHEAEEM5kdlFdZIY1ULc4MthFTywRd1N5reUXqqC7AQ9oI2Zjclwrczup1vU9lUilYDwGndBx2/gp5OjyiGoFx/+CG9j1PAn7jkYoAAAAAElFTkSuQmCC",
      blank: true,
    },
    {
      name: "腾讯新闻",
      url: "https://www.sogou.com/sogou?site=news.qq.com&query=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC50lEQVR4nG2TS2hcdRTGf/87c+/NHTOZR2ybtEoz7SILWyRqCmKCKeJrI2gJFRc2G4siRF0qglpRcaFFAoqgFkWxtkLdFNGWToSmEGo19EFN2hKSdGaatCb3ZmbuzH0eF7HoVA/84Cw+Pj4O31HcMtG0Nqu09p7otr2sJJ7noYnnsBA2mHnOuqWdc8OT4//WazcXmWZESsOipXf3OOkfqKVeJ6nnMRGuhy6mROzrfbb48I+7V/5jINOM0P35AcIZnMReku07MAwDy7L4dGA/XdY6phqLnKqcYnTrruye8VFpiS2NoyKLL0q0PCau64rn+xKGoURRJFEUyfTSZfli5pBs+35AXi2+ICfnf5HCd/1FAC26lJ0ldsE7TV2G0HUdPZnk3LzDiTmb7e8c4/ycwZ6tu/ig720aCYOJ0k8cHPx4CECJ85HgX4NgDr/zALquM7Wwyj1fnWlJufzyA2RSOldvlBn74316Owq8O3PwLQ2zF5q/QupBEokEAIcv2GCmWth/fBalFN25Ddzf/RgT1ybZnOp6Q8P9Hfwp0LeglALgy6UGtLW1MHZlFQClFI9u2slg4XF0CdFonoHIBu8sAEfOLVH2ANNqwU53rB0cQIS+7L3MezYazUlEAjD7iEV4cvt69nVpYJhgtP2NzvIzhTWDOCYW4Wp1AT8Ox7W6egRQuMsniKJorY2WSW/g8fRGg34zZlscsmB7BEFAve4SxzFeUCVWvEKF/MjipcuyYttSq9fF8zyJokjiOG7hz/GT0vz5uFSs9VK+8y554ujwP2Wq3L5xZfHrb8R2HKnVatJoNsX3fQmCQFZXq1L95DMpk18j0SnlZKdsPnJ3FkDdNCmTl/R7r8GmLrwLVzAG+uH0JI1jh5CwicqYqIyFMky8by/23YEz1WIAUNLzReOpLUMq047WkUbLZNGyObRsJ1p2He6Hh6kWf8sVcOxbv7hlSuTevH7foDijL8mNHUNSIleskOn5P+1fu3twDSB3ukoAAAAASUVORK5CYII=",
      blank: true,
    },
    {
      name: "凤凰新闻",
      url: "https://search.ifeng.com/sofeng/search.action?q=%s",
      favicon:
        "data:image/x-icon;base64,AAABAAEAEBAAAAAAIACBAwAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAA0hJREFUeJxNk11MW3UAxX/39t/ellLAAgUyEBFwIAsOAkNkakxMNjcJ0S1u0ZGZGT+S+WD0wcQn49P0ZZJo0LkYI5i56RwjIzoS2ISEIAzHpxLsYBIKLR+Fln7cllv+PiDVk5zH80tOco7S5kACKOwos6qGrNrHWZ8aZysYIH3vo2hZ2cRWV1i98xuh+7P8X0r7vwCA0jNv4qyqYebCZxQ3n6Hw2EmC7hnWRoYwIhGEzUbYs8DspW+Jr/tRALEbzj/aREHTcQbeaObpy51YXTn0nTpOZHGB7PqD2HLz0FeXMcJhXPUH8f7aixEOQbsDecmVIr3Dg7KroUrOXb8qg54FeflBp+x5qVFu+rwyFoslHV5bldNffyl/KMmVbQ6kEA4HeYeOEl1ZQbFacT17mP4XD2PJzKLuq3YUITAM47/SVhsFJ04hTYKht19DZDxWTUZ1LRszf5J7pInArBvfQD/Vn36BISVS10noOsJuTzKi3iVyG18gr6sD1V5aBlYb24ZB6t5yVocGAcg4UI9/fJRbzz/DzSermDz3EYZhYGxtkUgkmO/4kYKXT6PaCovY2gyi5RciLRrxcAhtTwHbUnL/ynfkHGrEmrcHX18vK8ODBOfusa2qBOfuYcTjqNaCQvTlZVL3VaLabKSWV2DJzOLuu2cRaelszrrZ33IBQ9fx3x1hKxJh7c4Qluwcgn/NoMqEgf3hErZjMVKKikmrqCSz4SmCUxMsdl4l/9gJTCkpbM5MY9I0EnqU0KwbYbcTnv8b4fm+jf2t36B7lxBmMwBl731A8etnMWlWVE3D19O9s9KaOgKTYyhIZDxGZH4OdaW3G9+NDhyFDyGESNrmzMRityOEwN3aQnp5Bc59lSx2XSejtIzAxBjBiTFUgOlzH7J07QqqYWA2m5NWEwaj779D4I9JGi62ExgdIepZIL24BE/nT8Q31nemnIhEWPrlBv7fhxGONIQjjeiyD2//bUxmC8/1DGDSNG6/9Sq1n7TgvthKfGMdBVB23ygecFJ0shlbTi7xUAjFbCarupbs6hoWun9m6vPzlLxymqjPx+T5j9l9cBKwDUjA8UgZrgNPYHXloPvXWBsfRVEUXLV1+Kcm8PbdSoZR4B+hMGuvciFlvwAAAABJRU5ErkJggg==",
      blank: true,
    },
    {
      name: "CNN",
      url: "https://edition.cnn.com/search/?q=%s",
      favicon:
        "data:image/png;base64,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",
      blank: true,
    },
    {
      name: "BBC",
      url: "https://www.bbc.co.uk/search?q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAq0lEQVR4nO2USwrDMAwFn0vvZR1NvtnzydRN06iNf4FAoGg2NmIUy4oSIAiCILiZ5Pa26F/qPX4jJEESqjrMXPUAQFW7/qEDZoZSCkQEAD6r8095JOFXEfFuahaQ3mG/bxUw8/yhHdKzFd0Sa629xCUv54xSyvAZhxkA9jZt763HzJtdoFvAVZCEiHwN3mhoDYB5SNoWx/5ZnfJU1Uj23Pv/AwtOEARB8Oe8AEX8nWWaRvY7AAAAAElFTkSuQmCC",
      blank: true,
    },
    {
      name: "Economis",
      url: "https://www.google.com/search?q=site:www.economist.com%20%s",
      favicon:
        "data:image/x-icon;base64,AAABAAEAEBAAAAAAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAALEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/CxLj/wsS4/8LEuP/AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//w==",
      blank: true,
    },
    {
      name: "今日头条",
      url: "https://www.toutiao.com/search/?keyword=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFN0lEQVR4nMWXTYhTVxTHf+/lJTHJzCTRDE61jiLFhWBBhJbSdiEoVHBTqFoFXVgoiNBNu9GN9mNTLbSF0lpKC1JcVK0iLkQobVEKghWsX6jggFO1MyVOzEsmMy8m79/FmZjJJFH7feBw3/2fc885755zv2CKJA1K+kzSTUl1/fNUl/SrpM8lLWI6SVolqfgvOO1GRUmrABxJg8BFoA/A933i8ThhGBKGIY7j4LoujuMA4HkelUqFyclJOlFfXx+Tk5NUq9U2WSqVIplMNro+sMwDdjScA7iuSxAERCIRwjDEdV1qtRqu6yIJ13WJxWK4rtsxgEgkQjwex/O8Nlk0Gm2JFdjhAWuno6VSiVqtBvDgr6fShOM45HI5KpUKlUqlYwC5XI5yudxxhtLp9MwgXvKAedORarVKNpulVqtRKBQeBJLNZhkbG0MSqVSKeDzeMYBoNEpPTw+JRKJNFovFQIJqFYpFuHfvSQ9om8tSqUQYhsRiMYIgIJPJkMlkKI+PQxBQGR1lYmQEfB98H9f3cUsl3FKJmEQ9n6deKDzAGhwpl21Mc3Y8R4cPi2KRBvu3b0OxiFsuk6pWqebzRMfHcX0fFYsQBDgzI/4b5Aj0D9rrTIkEDAzA8DDU6y2i9lLtRp4H/f2QTMKNG62ylSvhiy/g2DHL8RNPGA8MWJtOg+PAnDkwNtY6VjaklZ9/Xlq3Tlq5som99ZZtIT/91Krb3y/dvm2yUkm6elX67jtp/37po4+ku3dNNjQkJRJtvjoHsH27DQoC6YUXDNu507Dvv2/VfeMN6auvpN27pYULpWjU8Geeka5dszH790t9fe1+ugYA0r590vXr0pEjUiwmvfuuGTtxolXPcaQNG6TLl00+Oip9841Urdrfr1/f2f5DA0gkpAULpHS6ie3ZYw6OHetsLBKRDhxo3fF//93SsGJF1wDa91PPg2+/tYo9fdoKCGDWLGuDoL1AX3wRzpyBTZvgyhXYsgXefhtGRmDtWvjkE9izBwYH2921IbUarF8Pp07B009bdW/YAI2db+Yhs2yZ8d69MDpqq+Sdd2BoCDZvhlyuyUuX2o89chWAFVNPj6Vi+XLLvSSdOSPt2mUpcRzpvfdMdvasVfr4ePdDePXqNj+tM9DTAz/+2Iw4mbT1O52efdb4wAEz8dRTttEMD8P58zB/PqxZAxcuwJdfwnPP2fa7cyfcvduevpaIZs+WLl2SfvhBOnRI+vRT6ejR5h8EgbVvvimlUs1x778vFQrSq69Kr71mOidPms7Nm9bfuvVPLkOQBgak4WEz8PXX0rZt9v3bb1IuZzrz5kkTE9KdO5a2Dz4wnb17Tf7yy9bP523TemgA8+dL585ZLsfGpFrNBp89K82aJbmu9PPPhh0+bGM+/ND6u3dLmYx06pR0/Lg0d27T7saN0iuvWD3NCKD1MFq8GA4ehHv3jAsFaz/+GG7dMp3BQVi0yPJ68SJkMjAxAV0uKI+i/+Y0fAg9/mn4uOQ4hIkEYTKJGu3UdzSdxuvrg1TKVlgyGXosWWLAdE4m27FpeAnMSSKBkklrp5xl5s6lMjlJ0OFO2Nvbi5dKTYdCj2vXWpR83+94pX7kjwMRwHFdIq7b8Vbc6SbtASHT7oXRaLTrlftxyHXdrjYikchMKPSAO8CTDaRcLjMxMfGXA+jv7+9qI5vN2s24SSOOpM+B1xvI/fv3CcPwLwcQjUap1+sdbXieN3MW9jmyh+IvTL2O8vn8vzYDmUyG3t7eRtcHlgH/7+P0AUlaJHs6/6r/8Hn+B0w7zXRC+ZfTAAAAAElFTkSuQmCC",
      blank: true,
    },
  ],
  mine: [
    {
      name: "MDN",
      url: "https://developer.mozilla.org/zh-CN/search?q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAABi0lEQVR4nJ2VsU4CQRRFzy66GCtLrWysjMbEyi+wNFHBmGDpH1jYWJtAq5WxpoFEorXxB6xs1CBBI4WJVhpNoPBayMAuuzOw3FcwvMe5eTOzy0OYIGCHMk3ayBJf3FMmTxCieotN6lZwMOpsRQzIUBwZNlEk0zdIjwtR7BqQGwsXIicg4HVsgxYBFGzlGS1pepjFHlSSCiUZ/ehQS9rVerJB1eOZeUKapINNXjz14jMbzdhxWImn5oi2dCa3FuObCH85HoJL0o3mIgYeMt0o3qBVbaZ659LlfpOOyCHza5/ewsPjKJXJv0L7ORjhDIwSDnGi+/kxAv6QfAsIvY+At5SxGSxbkEshtKqanpS1PwcmGgN4xfE6hZ4DowXqlitLkh9PlVJe42e8rYvIBr4dG6ANj0mF/ZBBw2Xw7HOX1NY5Hlfd9b2r/1ufmq22gcc18OYyqA39U53Smr3aIosg7zJwRt4MltJYeEn0R9tJavw0NNqEYDvVcM31uH6WgAJVmnSsYIcmVQrh8f4HufpcPqh3SFcAAAAASUVORK5CYII=",
    },
    {
      name: "Can I Use",
      url: "https://caniuse.com/#search=%s",
      blank: true,
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAADAFBMVEXRa1hIvVUBriaErG7//vzQx7e116nq4M2Dy4FmYktwx3Tt48/y6NQXsTH+7uK2fGBhwmhoxW7Wg3HEMxe8EAD78Nqn0plRvluZ0ZLKQizNs6qupZZ0zX/9/+3669vM5cUxt0QlszpQqV6HhoPP3L1YwWKYooEQujB9ynxWUTgly0Tp38yhlIhAkEAldSRdOC706tbw5dL/8ezInXD169iK1JO7u6n+9ODAJQSY2J+Wrc+z4bLluKpnkcWbyYz/++CMzYcAqQz25dd90Yn90/ll020qwEPk28j5/OjhueEstkDfoo7k2NP+68n/5+CmSj3i2MX85dI6ukzx+ufhqp7+8/r39er29uP77NU0kjgvvEQ4LBc8nEFOzVqQvY0evzvN+f/m+drt8uHpxbnb5s7s7dpwomfb0cA3p0Ti7tfB473n3bzc7dDe3szr//9SZH0Avij37tng1ssttT7dk4Xf4t6U4ZOm3Kh81ntaelrv6Os/WC6I3Ik+iDvuzr/z2M6AgICBgYGCgoKDg4OEhISFhYWGhoaHh4eIiIiJiYmKioqLi4uMjIyNjY2Ojo6Pj4+QkJCRkZGSkpKTk5OUlJSVlZWWlpaXl5eYmJiZmZmampqbm5ucnJydnZ2enp6fn5+goKChoaGioqKjo6OkpKSlpaWmpqanp6eoqKipqamqqqqrq6usrKytra2urq6vr6+wsLCxsbGysrKzs7O0tLS1tbW2tra3t7e4uLi5ubm6urq7u7u8vLy9vb2+vr6/v7/AwMDBwcHCwsLDw8PExMTFxcXGxsbHx8fIyMjJycnKysrLy8vMzMzNzc3Ozs7Pz8/Q0NDR0dHS0tLT09PU1NTV1dXW1tbX19fY2NjZ2dna2trb29vc3Nzd3d3e3t7f39/g4ODh4eHi4uLj4+Pk5OTl5eXm5ubn5+fo6Ojp6enq6urr6+vs7Ozt7e3u7u7v7+/w8PDx8fHy8vLz8/P09PT19fX29vb39/f4+Pj5+fn6+vr7+/v8/Pz9/f3+/v7////XnzsNAAAAmklEQVR4nF3KQQuCMADF8U2EQT1hklJCQSIhbIdCCtepRodgpxB26eKxj+ChL99mhOm7/OHHI8AdD+AFeZzXRXEhTLKKSuZyYD49xFM4T+E0hpttprAeQ2x5YAZYJEsb6KgHHweN3f6DSnL/iLTa/B5lWOq21SpMdZum5Cn4nguTi+ydCWMEAVZVR/mOAqAd8AWgBz8H12qGYR9XXh8E2WsxgQAAAABJRU5ErkJggg==",
    },
    {
      name: "GitHub",
      url: "https://github.com/search?utf8=✓&q=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADLElEQVR4nM1Xz2sTQRT+dpNScqhJW7ZJ9mx706RJ0/SHbRHR/8Cz9ORBBBEUEfwjBJVePHhQFPUiIi09SNqkSbtJU70p6dH+IOChQmpNss9Ddqezu7NJmgT0LQPZN/O+75s3bzI7wD826QxjPURUawtUktrGbWfggK7rR3bnxWjc8v51p+AIlGVZBkAdC9B1nQXbCZuZXYwsy648bh1yvV6vA8D9Bw+xvLLSNrlFSPFUiMfjEXKJnJ5arVYDgMj4REfEdvtSzAMAvF6vg8/hqFWrBACRWKIn5EzEttYQ0ddn4bS8VE3yHs3cIaKYR6VSOfD7/WHTJ3P9YSJykCuKgp1tDTvGDNoxt/FEBJ/PF+J9LAMnJycEAFFb6s9CbDc7Fo/X398vAYDX8A+ACJH4pBOFmm7jpiaMtOHJAPD7+PiIiBqdthaJJUBEHbVmeKqqjjEBLMhQzbdifrNjAcX8phCTiLBbKn1jS0BEGJ9IOrJlkndlgngeUwbQ11AsylhnM+fbtpZzxTUF+BrpFzw9ECDCXrhyjQlgSyAq2a7TDyC1tu7AHvT7LQKO+ZT0WsCdu/ccvvdvX1uWoEq6LlyC8cQUSNe7a6LH6DMFgIhQyGUE+6W7QoxNzjTFtAhwK8RYcqYj8pu3botnbxR3YGjoPBMwODx8jhWi0fLZNPsdT84inpxti/jxk2eIJ2ehaQXh7PPZtDn7XYA7jH6WywQA8alLrFgKuTSm5y7jT7VqKaJCLi0sOD7WzczYIUWRWAYMh0oAVpc/WgA31j87QIR/ry2pgXwuDeLIgdPTEAD2iQgBbo8CjfrQsutWAS7bs9m2fffmJYgINxYXr/N+xydZ+fCQACAxPcd8dgFuxsfYzcRQgkH3TzLDPOWDgxoATMzMOzpfvXiOsdFRIYlo/OqnDxgMBBrkoZCDT7Y7ANSVUMhDRNAyKWiZlOUk+bG377oD7KeOlkmxJRWRuwkAAH0kHJbM4traWMPWxhoAYGF+rmURmuMJwNOlpUcj4fCZLya8DRzu7TmuZu1YUFVbXs3cMsDbr6CqSkFV9X4vlbJuszfbhWj0qjFeakX+X9hfKwNpwLLdyLQAAAAASUVORK5CYII=",
    },
    {
      name: "w3c",
      url: "https://www.runoob.com/?s=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACHklEQVR4nIWTX0jTURTHP+fu59xUCJLGCgp0IIPSIvLPg9JTvZq+RBj5WJGySWVPKSH0ZCSWD/ZiFAQVqQUVBulbaQT2IkVEUhISPrTptE23e3pYm26t+sLlHrjnfL/3fM+9Qh4Gp5ubVOSmqlSLIACqGkUY8bp83acP3drYmi+ZYGSq3RP1RudFxJ9PmgOVU6GG0bs5BCNT7Z7lkuUVwPlncZaEi6GGsf4swcD0sUW14p954S6cryAoKoJ/j6VybxLEHAzVPZp1Bl63HBHB//2bYe6N2dLUJhqD68xKgANflpj7GCewL4m1qQnAJwPTLZ9ECJS7K2ja3gFogRuneRX4mYowsdSHIKRc7HJECAAYceEu2rRARECV6Ooa28pKUU0Tp0xRNseVpNXkqxljeDz5ig/zC0RiqywsLnGhf5jYWryQO00mv/j4+T6qqyoJVuzm3tNJaqoquN59ls6rN3j/+WtuubDgqJIQoRjAWsv9a5eZmnmHqiWyHAOgd+gOw71duIsc1lKRTUExE0aE51tZrbUcrq1h545yzp1oJmUtPWfacvzJoLN29KWzXhw76U6UxRJ2BSOu7GGZtyQnOTNdVft757YImn5IMy1XBHoKjfAP29JbPFw/7gUwAOH6sV5Fh9I6/1vEExvWl/UhE4TrxzvUchRl9a/qyoMfdftLLzU+WclvLQeDb1uDNqltiAZREgIPPY7vWf5XBvgFMS/Jw/yUPqwAAAAASUVORK5CYII=",
    },
    {
      name: "GreasyFork",
      url: "https://greasyfork.org/scripts?q=%s&utf8=✓",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3ggEBCQHM3fXsAAAAVdJREFUOMudkz2qwkAUhc/goBaGJBgUtBCZyj0ILkpwAW7Bws4yO3AHLiCtEFD8KVREkoiFxZzX5A2KGfN4F04zMN+ce+5c4LMUgDmANYBnrnV+plBSi+FwyHq9TgA2LQpvCiEiABwMBtzv95RSfoNEHy8DYBzHrNVqVEr9BWKcqNFoxF6vx3a7zc1mYyC73a4MogBg7vs+z+czO50OW60Wt9stK5UKp9Mpj8cjq9WqDTBHnjAdxzGQZrPJw+HA31oulzbAWgLoA0CWZVBKIY5jzGYzdLtdE9DlcrFNrY98zobqOA6TJKHW2jg4nU5sNBpFDp6mhVe5rsvVasUwDHm9Xqm15u12o+/7Hy0gD8KatOd5vN/v1FozTVN6nkchxFuI6hsAAIMg4OPxMJCXdtTbR7JJCMEgCJhlGUlyPB4XfumozInrupxMJpRSRtZlKoNYl+m/6/wDuWAjtPfsQuwAAAAASUVORK5CYII=",
      blank: true,
    },
    {
      name: "人生 05 电影",
      url: "https://www.rs05.com/search.php?s=%s",
      favicon:
        "data:image/x-icon;base64,AAABAAEAEBAAAAAAIACBAgAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAkhJREFUeJytk19IU2EYxp9z5s40ZzSRkWOQJIog0dzmH2aECFEIhiSCoN2oECJYYUI3QjqlQdqdF6bYRcwLUQhRxBBkXgQqKaKRjWFYMmnmyMN2FMzv6SI9FnXRvwe+m4f3+/G+L88rCSGIf1ACAEiS9NcA+VfmdjiMT1tbv0cQQpAkhRD8sL7OOxUVdAB0JyXx3doajxVaWWG1w8Eal4s1Lhdr3W7OTU9TB7ycmmKJ1UonwFKrlbfLy+ltbCRJxlWVFTk5zAPoPHqXLRZGIxEmAMBGMIj2hgbg8BCdfj8uejzY0zT0d3VhX9Nwt6oKqenpuNfTA0mWQQDnsrNxJi0NeLO4yCs2GwtMJr4KBPSWnw8O0tvUxIVAgBcMBo729fFxayuf+nyMqapeh/b6ejolif2dnbqpRqMssdk47vdzZmyMTlnWW88D2FJZeQK4npnJktRURiMR3ez3+VhgNvN9KMTPOzt82NzMF8PD/Li5ydDqKmuKini8O+QbjXzW3a1/nh0fZ57RyJ6WFr3oWEII9ra1sbaw8ARwKSWFb5eW+OXggKMDAyw2m3nT4+GepnF2YoJPOjoYU1W+np/n/epquo1G9nm9OlS6VVrKpORkaLEYFmZmcDYjA72Tk1ASE3EjNxfns7KgxePYDIUgGQwoLivDo5ERKIryLUjB5WVes9vpkmU+qKvjdjhMktwIBpmvKPryrtrtnBwa4r6m/TCWdDQL9jUNp8zm7xOKlbk5xHd3cdpiQbbDAcVk+inJkhCC//2Y/kRfASoRrtb2v2kbAAAAAElFTkSuQmCC",
      blank: true,
    },
    {
      name: "射手网 (伪)",
      url: "https://assrt.net/sub/?searchword=%s",
      favicon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADfElEQVR4nF2TQUxTdxzHv7//e319pH3QEi3MAYMpqWZj1c1lESIz0WwLXmZl7CAXjCYzuyCJJPVgPAy8zZglEuRA5sLJiIlm4ExmQtDilmVgQrDCsq2WuRRKoX20tO+9//vtglni9/z5fk7fLzEzXs+T8+f3rTx6VItSSV2fn4/qVVVjX25szACQ3xLt72Oee8XS64LfYrHe9bm5Do/P50mOjxvEHJZESx8MDKzv6O5mZ3bWHz9z5s8t0/wOzDPqq+JPx49/nJqY+CIYDkcPj46+wa6L5N27YNuGZD5gmyZ21dcjnUxCWtZHKJU+8er6VQEAP9TUtIZ7esbbR0a+lqZZLUslu6atzYlcvCgl4BLgCE2zXdd1lm7edMxcziKgOhCJfKMCQGFlJZpfWqp+LxYrldfXPc9u3IC+cyf9Oz0tBOBKQAURCyEgVBXBhgbFSqcdaVlCAAAB+7Nzcy67rvJWZyftO3eOVuNxpB4+ZAmQBFitqCAA3NLfT9GFBT4wOEiObbvqtmCjnMkQiLA0PMyKYUDVdaH7fNTU2cl1HR1Ue/Qou8xkNDZybnGRVuNx8vr9qjpFFCDAkYUC2ZubqNq7l6x8nkPt7fjs0CGEWlsZAJVzOSKAnw0N0e+XLrnlTEbUHjy4JjKVlbUuUOEyO7JUonI2i2AkQm6xiF/6+vDjkSN0a88e/DE6CiJCenqazUzGNUIhrj12bEj8VSjU6Iax693+flfRNKpsbqZQa6v458EDyHIZgXCYpGWBpQQAaJWVEIAiNG3r/StXBgRL+XbTiRM+f1OT/WtvL3kMg8vZLDd2deHT+/fRNjzMkQsXgO3BqYbBBJAsFh1zcdFW5xXlxZuTkykzkZAfXrv2TiGV4uWJCTR2dWFhbIzTjx9TLpFAJBYDtjUMsDcUyq/OzEB87zg/b62urjWfPbubhHCmTp8mUhTKJRLs5PMkPB6spdNgAMxMiqa5BEAJBmdnL1+WKgDYwJ2ng4OfF1MpKR2HG6JRpfjyJf6+d889PDJCu0+domBLC4iINb9fAlB9qhooAxAA8BXzLW8gcMeoq9MVXdde3L6tFJJJJZ9MiumeHlJ9PgQjEUjLEuVs1uvRdeuppl3VAoH/37g8OVllZbP9ievXA8l43OvXtJDrOHV6MLiDdL2+8eRJ2KYZ31xeTnoDgalCd/dw3fPn4j+2Ya+YXX1PBgAAAABJRU5ErkJggg==",
      blank: true,
    },
    {
      name: "游戏 -3dm",
      url: "https//so.3dmgame.com/?type=4&keyword=%s",
      favicon:
        "data:image/x-icon;base64,AAABAAEAEBAAAAAAIAALAwAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAtJJREFUeJydU0tIVGEU/v57r3dmdJzG0a6T6UyaM6GZYkJhBRZE9EJcCEVpVIuIyGhRi6hNBC5bBBJRqxgiopoWlVZoVvQgUsuaIZPyNabzuukd5zre199CMaMk6IPDgXP4vvNxDgdYBKET/GKt30D+Vrx8alu5JCn5Jl4Mfg9zwpoyy7j2JjV8qLXr3wLnfV4UBB2bSyqXt7gKM0vtdjMkSUU0nOzu7Qqfbjj3tGNRgRgFHl3YsnPL7iK/IJh4EIBQAkoMEINC/KFrT+8N7Nmf77yrHvb9KXC7qdxaVlfe7/EucRJQTM9oYBiCkYEEXEWZmJY1RKOK+OROYFVZrTDR91At4n7zn2evdzgtzgedI1BUQJI0yLKKowe8aO2IYGhEQoaVOIrLlx1LDbPipu2OSvK5dS9vzx5XfIEhVGulfq+k14VjMzDVuBAKxUAjERjTMsCxYCzpyF2aA9PzyLh130p71MB1LqkzXSSRb1ufln0rN8+01ZyYgduVicl0DY6cJdCyV0FTOBAiw2KKw11iQzzP6szyZmGsW4xwUJRXxZXOI6mUcsq92g4GAAWFyVyBZenrAMLO75tSBUbyLXjpLQwdCA2IPczHz+GW4cGplKdklgwQUL4YbMYGEMKBAQEDgAEFQ9LAWjdCT3Ojv18KMkZOGxPrSxpiVJbkpA5Np0ilVMCyBoQuPBEBQEDmMjWvfRVIjFUNVbfJJD4R53wndzmFwoymAo/tIM9DqNpxBoQxzRF+wQCgGxSBZ88bK3c2+QCAybJlofHivXFLw46zr9vHaghLBg2qzk4C5sMAoGoaPrx8eTN4tfnGvDdKKQcAycQM7sff4X3zJVt1he3KikJPvUVwgbAsdINO/fgaYEY7/Wb7asG99Xh7aKEAAwC6rmM0JqJv8hp6H6s297cXtZMOjyhDmKAZrGymiplXk+kjSfZLz6evMb/fL//xWf+Dnxs2M3yo2q6nAAAAAElFTkSuQmCC",
      blank: true,
    },
    {
      name: "搜狗表情",
      url: "https://pic.sogou.com/pic/emo/searchList.jsp?statref=home_form&keyword=%s",
      favicon:
        "data:image/x-icon;base64,AAABAAEAEBAAAAAAIADiAgAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAqlJREFUeJxtk0+IVXUUxz/n/O67772rjdH1NVpRoeVo1sZavnI0S0vFhaOBpC4S/0AuCqE0aNGi3IS4kEkEF+EiyoVhxIyKNsxYGxERFEVI5w/WKE/GAe/YvHfPadEdkaGzPH8+fM/he4RpkdXTOvARwjKgvUiP4pwDjiYDjf7H++WxwVlAN0on0A2cBAaL8gvAWmAXRh+wMxlo3H8EyOrpk8BZlOsIO5K+xvh0ZQDZ0rQN5zBGB7A8GWiMTQF+RGkhbCbIAlHZRJBXUUkEHrj7EMZFz+00ud/BOIYRkoHGRsnqaSfKMYRXUFktQb6npJFECkEeAkbuVVom3jTz3L/C/ADOVYwPFdgGfJf0NcZFZQcljSQOSCX0SFmfkVjnEOsiIt1OpKckyMxixW5gmyJ0FgeDSP6USJFYkUp4W2fEB7UtfkOfiG9WTv51pNoz+h6Rflac5BeETgVqOMMABN1DkOMS1KSkJamGzVIOZyXIrclNz3/zz/pna9WeUSsAw0BNAQcUoPrr3/cqJ25vcPx14BDOMA64z8X43HO/NvF++/ICoIArMITQATDxTm3rxKr22eUfhi+Vjt782LLmfHvQXOmTdt1zg9yfouX7C8BCYDDC6UXYAJz33D+RwKGHa+YcJ2ivjU/eEJExYMRb1uFNg9ynVujCOSVZPV2M0I+wBGWdBN1NSedLJKCFUc3xlkPTRt28C/MRnIsYb04Z6WuUFQjvJn2NsWxFbbEEWYLIc0Ab7uOYX8E5XT1zdyJbmu7HsKS/sS8q5HyJMQ/lt+ytdEty5u5l4Mr/2RlA4jDkLfvj0S8UKhT4FGEvwu/Azzg3/pvgZeAlKYdvw9OVL7xpH9j9ybXV3jsXZDo9q6c1YCOwDOHFIn0LOIfyms6KUymHPeWfRgYB/gUGFwYmsuO+WAAAAABJRU5ErkJggg==",
      blank: true,
    },
  ],
};
