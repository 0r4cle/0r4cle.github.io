"use strict";
(self.webpackChunkamos = self.webpackChunkamos || []).push([
    [250],
    {
        9602: (w, C, n) => {
            n.d(C, { y: () => v });
            var d = n(1281),
                u = n(8288),
                e = n(4650),
                f = n(6895);
            function s(t, r) {
                1 & t &&
                    (e.ynx(0),
                    e.TgZ(1, "div", 1),
                    e.Hsn(2),
                    e.qZA(),
                    e.TgZ(3, "div", 2),
                    e.Hsn(4, 1),
                    e.qZA(),
                    e.BQk());
            }
            function p(t, r) {
                1 & t && (e.TgZ(0, "div", 4), e.Hsn(1, 3), e.qZA()),
                    2 & t && e.Q6J("@expandCollapse", void 0);
            }
            function h(t, r) {
                if (
                    (1 & t &&
                        (e.ynx(0),
                        e.Hsn(1, 2),
                        e.YNc(2, p, 2, 1, "div", 3),
                        e.BQk()),
                    2 & t)
                ) {
                    const o = e.oxw();
                    e.xp6(2), e.Q6J("ngIf", o.expanded);
                }
            }
            const x = [
                    [["", "amosCardFront", ""]],
                    [["", "amosCardBack", ""]],
                    "*",
                    [["", "amosCardExpansion", ""]],
                ],
                m = [
                    "[amosCardFront]",
                    "[amosCardBack]",
                    "*",
                    "[amosCardExpansion]",
                ];
            let v = (() => {
                class t {
                    constructor() {
                        (this.expanded = !1),
                            (this.face = "front"),
                            (this.flippable = !1);
                    }
                    get classList() {
                        return {
                            "amos-card-expanded": this.expanded,
                            "amos-card-face-back":
                                this.flippable && "back" === this.face,
                            "amos-card-face-front":
                                this.flippable && "front" === this.face,
                            "amos-card-flippable": this.flippable,
                        };
                    }
                    ngOnChanges(o) {
                        "expanded" in o &&
                            (this.expanded = (0, d.Ig)(
                                o.expanded.currentValue
                            )),
                            "flippable" in o &&
                                (this.flippable = (0, d.Ig)(
                                    o.flippable.currentValue
                                ));
                    }
                }
                return (
                    (t.ɵfac = function (o) {
                        return new (o || t)();
                    }),
                    (t.ɵcmp = e.Xpm({
                        type: t,
                        selectors: [["amos-card"]],
                        hostVars: 2,
                        hostBindings: function (o, l) {
                            2 & o && e.Tol(l.classList);
                        },
                        inputs: {
                            expanded: "expanded",
                            face: "face",
                            flippable: "flippable",
                        },
                        exportAs: ["amosCard"],
                        features: [e.TTD],
                        ngContentSelectors: m,
                        decls: 2,
                        vars: 2,
                        consts: [
                            [4, "ngIf"],
                            [1, "amos-card-front"],
                            [1, "amos-card-back"],
                            ["class", "amos-card-expansion", 4, "ngIf"],
                            [1, "amos-card-expansion"],
                        ],
                        template: function (o, l) {
                            1 & o &&
                                (e.F$t(x),
                                e.YNc(0, s, 5, 0, "ng-container", 0),
                                e.YNc(1, h, 3, 1, "ng-container", 0)),
                                2 & o &&
                                    (e.Q6J("ngIf", l.flippable),
                                    e.xp6(1),
                                    e.Q6J("ngIf", !l.flippable));
                        },
                        dependencies: [f.O5],
                        styles: [
                            "amos-card{position:relative;display:flex;overflow:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--amos-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}amos-card.amos-card-flippable{border-radius:0;overflow:visible;transform-style:preserve-3d;transition:transform 1s;perspective:600px;background:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}amos-card.amos-card-flippable.amos-card-face-back .amos-card-front{visibility:hidden;opacity:0;transform:rotateY(180deg)}amos-card.amos-card-flippable.amos-card-face-back .amos-card-back{visibility:visible;opacity:1;transform:rotateY(360deg)}amos-card.amos-card-flippable .amos-card-front,amos-card.amos-card-flippable .amos-card-back{display:flex;flex-direction:column;flex:1 1 auto;z-index:10;transition:transform .5s ease-out 0s,visibility 0s ease-in .2s,opacity 0s ease-in .2s;-webkit-backface-visibility:hidden;backface-visibility:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--amos-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}amos-card.amos-card-flippable .amos-card-front{position:relative;opacity:1;visibility:visible;transform:rotateY(0);overflow:hidden}amos-card.amos-card-flippable .amos-card-back{position:absolute;top:0;right:0;bottom:0;left:0;opacity:0;visibility:hidden;transform:rotateY(180deg);overflow:hidden auto}\n",
                        ],
                        encapsulation: 2,
                        data: { animation: u.L },
                    })),
                    t
                );
            })();
        },
        5804: (w, C, n) => {
            n.d(C, { J: () => f }), n(9602);
            var u = n(6895),
                e = n(4650);
            let f = (() => {
                class s {}
                return (
                    (s.ɵfac = function (h) {
                        return new (h || s)();
                    }),
                    (s.ɵmod = e.oAB({ type: s })),
                    (s.ɵinj = e.cJS({ imports: [u.ez] })),
                    s
                );
            })();
        },
        5250: (w, C, n) => {
            n.r(C), n.d(C, { AuthSignOutModule: () => y });
            var d = n(2510),
                u = n(4859),
                e = n(5804),
                f = n(4466),
                s = n(7579),
                p = n(5963),
                h = n(8746),
                x = n(2529),
                m = n(2722),
                v = n(8505),
                t = n(4650),
                r = n(8951),
                o = n(6895);
            function l(a, c) {
                if (
                    (1 & a &&
                        (t.ynx(0), t._uU(1), t.ALo(2, "i18nPlural"), t.BQk()),
                    2 & a)
                ) {
                    const i = t.oxw();
                    t.xp6(1),
                        t.hij(
                            " Redirecting in ",
                            t.xi3(2, 1, i.countdown, i.countdownMapping),
                            " "
                        );
                }
            }
            function b(a, c) {
                1 & a &&
                    (t.ynx(0),
                    t._uU(1, " You are now being redirected! "),
                    t.BQk());
            }
            const H = function () {
                    return ["/sign-in"];
                },
                Z = [
                    {
                        path: "",
                        component: (() => {
                            class a {
                                constructor(i, g) {
                                    (this._authService = i),
                                        (this._router = g),
                                        (this.countdown = 3),
                                        (this.countdownMapping = {
                                            "=1": "# second",
                                            other: "# seconds",
                                        }),
                                        (this._unsubscribeAll = new s.x());
                                }
                                ngOnInit() {
                                    this._authService.signOut(),
                                        (0, p.H)(1e3, 1e3)
                                            .pipe(
                                                (0, h.x)(() => {
                                                    this._router.navigate([
                                                        "sign-in",
                                                    ]);
                                                }),
                                                (0, x.o)(
                                                    () => this.countdown > 0
                                                ),
                                                (0, m.R)(this._unsubscribeAll),
                                                (0, v.b)(() => this.countdown--)
                                            )
                                            .subscribe();
                                }
                                ngOnDestroy() {
                                    this._unsubscribeAll.next(null),
                                        this._unsubscribeAll.complete();
                                }
                            }
                            return (
                                (a.ɵfac = function (i) {
                                    return new (i || a)(
                                        t.Y36(r.e),
                                        t.Y36(d.F0)
                                    );
                                }),
                                (a.ɵcmp = t.Xpm({
                                    type: a,
                                    selectors: [["auth-sign-out"]],
                                    decls: 30,
                                    vars: 4,
                                    consts: [
                                        [
                                            1,
                                            "flex",
                                            "flex-col",
                                            "flex-auto",
                                            "items-center",
                                            "sm:justify-center",
                                            "min-w-0",
                                        ],
                                        [
                                            1,
                                            "w-full",
                                            "sm:w-auto",
                                            "py-8",
                                            "px-4",
                                            "sm:p-12",
                                            "sm:rounded-2xl",
                                            "sm:shadow",
                                            "sm:bg-card",
                                        ],
                                        [
                                            1,
                                            "w-full",
                                            "max-w-80",
                                            "sm:w-80",
                                            "mx-auto",
                                            "sm:mx-0",
                                        ],
                                        [
                                            1,
                                            "text-center",
                                            "relative",
                                            "flex",
                                            "place-items-center",
                                            "self-center",
                                            "grid",
                                            "items-center",
                                            "mx-auto",
                                        ],
                                        [
                                            "width",
                                            "130",
                                            "height",
                                            "55",
                                            "viewBox",
                                            "0 0 514 150",
                                            "fill",
                                            "none",
                                            "xmlns",
                                            "http://www.w3.org/2000/svg",
                                            1,
                                            "dark:block",
                                            "hidden",
                                        ],
                                        [
                                            "d",
                                            "M155.091 30.9091H179.364L205 93.4545H206.091L231.727 30.9091H256V124H236.909V63.4091H236.136L212.045 123.545H199.045L174.955 63.1818H174.182V124H155.091V30.9091ZM357.761 77.4545C357.761 87.6061 355.837 96.2424 351.989 103.364C348.17 110.485 342.958 115.924 336.352 119.682C329.777 123.409 322.383 125.273 314.17 125.273C305.898 125.273 298.473 123.394 291.898 119.636C285.322 115.879 280.125 110.439 276.307 103.318C272.489 96.197 270.58 87.5758 270.58 77.4545C270.58 67.303 272.489 58.6667 276.307 51.5455C280.125 44.4242 285.322 39 291.898 35.2727C298.473 31.5151 305.898 29.6364 314.17 29.6364C322.383 29.6364 329.777 31.5151 336.352 35.2727C342.958 39 348.17 44.4242 351.989 51.5455C355.837 58.6667 357.761 67.303 357.761 77.4545ZM337.807 77.4545C337.807 70.8788 336.822 65.3333 334.852 60.8182C332.913 56.303 330.17 52.8788 326.625 50.5455C323.08 48.2121 318.928 47.0455 314.17 47.0455C309.413 47.0455 305.261 48.2121 301.716 50.5455C298.17 52.8788 295.413 56.303 293.443 60.8182C291.504 65.3333 290.534 70.8788 290.534 77.4545C290.534 84.0303 291.504 89.5758 293.443 94.0909C295.413 98.6061 298.17 102.03 301.716 104.364C305.261 106.697 309.413 107.864 314.17 107.864C318.928 107.864 323.08 106.697 326.625 104.364C330.17 102.03 332.913 98.6061 334.852 94.0909C336.822 89.5758 337.807 84.0303 337.807 77.4545ZM422.841 57.6818C422.477 54.0151 420.917 51.1667 418.159 49.1364C415.402 47.1061 411.659 46.0909 406.932 46.0909C403.72 46.0909 401.008 46.5455 398.795 47.4545C396.583 48.3333 394.886 49.5606 393.705 51.1364C392.553 52.7121 391.977 54.5 391.977 56.5C391.917 58.1667 392.265 59.6212 393.023 60.8636C393.811 62.1061 394.886 63.1818 396.25 64.0909C397.614 64.9697 399.189 65.7424 400.977 66.4091C402.765 67.0455 404.674 67.5909 406.705 68.0455L415.068 70.0455C419.129 70.9545 422.856 72.1667 426.25 73.6818C429.644 75.197 432.583 77.0606 435.068 79.2727C437.553 81.4848 439.477 84.0909 440.841 87.0909C442.235 90.0909 442.947 93.5303 442.977 97.4091C442.947 103.106 441.492 108.045 438.614 112.227C435.765 116.379 431.644 119.606 426.25 121.909C420.886 124.182 414.417 125.318 406.841 125.318C399.326 125.318 392.78 124.167 387.205 121.864C381.659 119.561 377.326 116.152 374.205 111.636C371.114 107.091 369.492 101.47 369.341 94.7727H388.386C388.598 97.8939 389.492 100.5 391.068 102.591C392.674 104.652 394.811 106.212 397.477 107.273C400.174 108.303 403.22 108.818 406.614 108.818C409.947 108.818 412.841 108.333 415.295 107.364C417.78 106.394 419.705 105.045 421.068 103.318C422.432 101.591 423.114 99.6061 423.114 97.3636C423.114 95.2727 422.492 93.5152 421.25 92.0909C420.038 90.6667 418.25 89.4545 415.886 88.4545C413.553 87.4545 410.689 86.5455 407.295 85.7273L397.159 83.1818C389.311 81.2727 383.114 78.2879 378.568 74.2273C374.023 70.1667 371.765 64.697 371.795 57.8182C371.765 52.1818 373.265 47.2576 376.295 43.0455C379.356 38.8333 383.553 35.5455 388.886 33.1818C394.22 30.8182 400.28 29.6364 407.068 29.6364C413.977 29.6364 420.008 30.8182 425.159 33.1818C430.341 35.5455 434.371 38.8333 437.25 43.0455C440.129 47.2576 441.614 52.1364 441.705 57.6818H422.841Z",
                                            "fill",
                                            "white",
                                        ],
                                        [
                                            "d",
                                            "M70.5 27.18C100.815 27.18 125.49 51.33 125.49 81C125.49 110.67 100.815 134.82 70.5 134.82C40.185 134.82 15.51 110.67 15.51 81C15.51 51.33 40.185 27.18 70.5 27.18ZM70.5 12C31.5699 12 0 42.8982 0 81C0 119.102 31.5699 150 70.5 150C109.43 150 141 119.102 141 81C141 42.8982 109.43 12 70.5 12Z",
                                            "fill",
                                            "#376DED",
                                        ],
                                        [
                                            "d",
                                            "M102.3 53H88.7C87.7611 53 87 53.6207 87 54.3864V112.614C87 113.379 87.7611 114 88.7 114H102.3C103.239 114 104 113.379 104 112.614V54.3864C104 53.6207 103.239 53 102.3 53Z",
                                            "fill",
                                            "white",
                                        ],
                                        [
                                            "d",
                                            "M52.3 53H38.7C37.7611 53 37 53.6207 37 54.3864V112.614C37 113.379 37.7611 114 38.7 114H52.3C53.2389 114 54 113.379 54 112.614V54.3864C54 53.6207 53.2389 53 52.3 53Z",
                                            "fill",
                                            "white",
                                        ],
                                        [
                                            "d",
                                            "M87.5769 39H53.4231C52.6371 39 52 39.7163 52 40.6V53.4C52 54.2837 52.6371 55 53.4231 55H87.5769C88.3629 55 89 54.2837 89 53.4V40.6C89 39.7163 88.3629 39 87.5769 39Z",
                                            "fill",
                                            "white",
                                        ],
                                        [
                                            "d",
                                            "M87.5769 77H53.4231C52.6371 77 52 77.7163 52 78.6V91.4C52 92.2837 52.6371 93 53.4231 93H87.5769C88.3629 93 89 92.2837 89 91.4V78.6C89 77.7163 88.3629 77 87.5769 77Z",
                                            "fill",
                                            "white",
                                        ],
                                        [
                                            "width",
                                            "130",
                                            "height",
                                            "55",
                                            "viewBox",
                                            "0 0 514 150",
                                            "fill",
                                            "none",
                                            "xmlns",
                                            "http://www.w3.org/2000/svg",
                                            1,
                                            "dark:hidden",
                                            "block",
                                        ],
                                        [
                                            "d",
                                            "M155.091 30.9091H179.364L205 93.4545H206.091L231.727 30.9091H256V124H236.909V63.4091H236.136L212.045 123.545H199.045L174.955 63.1818H174.182V124H155.091V30.9091ZM357.761 77.4545C357.761 87.6061 355.837 96.2424 351.989 103.364C348.17 110.485 342.958 115.924 336.352 119.682C329.777 123.409 322.383 125.273 314.17 125.273C305.898 125.273 298.473 123.394 291.898 119.636C285.322 115.879 280.125 110.439 276.307 103.318C272.489 96.197 270.58 87.5758 270.58 77.4545C270.58 67.303 272.489 58.6667 276.307 51.5455C280.125 44.4242 285.322 39 291.898 35.2727C298.473 31.5151 305.898 29.6364 314.17 29.6364C322.383 29.6364 329.777 31.5151 336.352 35.2727C342.958 39 348.17 44.4242 351.989 51.5455C355.837 58.6667 357.761 67.303 357.761 77.4545ZM337.807 77.4545C337.807 70.8788 336.822 65.3333 334.852 60.8182C332.913 56.303 330.17 52.8788 326.625 50.5455C323.08 48.2121 318.928 47.0455 314.17 47.0455C309.413 47.0455 305.261 48.2121 301.716 50.5455C298.17 52.8788 295.413 56.303 293.443 60.8182C291.504 65.3333 290.534 70.8788 290.534 77.4545C290.534 84.0303 291.504 89.5758 293.443 94.0909C295.413 98.6061 298.17 102.03 301.716 104.364C305.261 106.697 309.413 107.864 314.17 107.864C318.928 107.864 323.08 106.697 326.625 104.364C330.17 102.03 332.913 98.6061 334.852 94.0909C336.822 89.5758 337.807 84.0303 337.807 77.4545ZM422.841 57.6818C422.477 54.0151 420.917 51.1667 418.159 49.1364C415.402 47.1061 411.659 46.0909 406.932 46.0909C403.72 46.0909 401.008 46.5455 398.795 47.4545C396.583 48.3333 394.886 49.5606 393.705 51.1364C392.553 52.7121 391.977 54.5 391.977 56.5C391.917 58.1667 392.265 59.6212 393.023 60.8636C393.811 62.1061 394.886 63.1818 396.25 64.0909C397.614 64.9697 399.189 65.7424 400.977 66.4091C402.765 67.0455 404.674 67.5909 406.705 68.0455L415.068 70.0455C419.129 70.9545 422.856 72.1667 426.25 73.6818C429.644 75.197 432.583 77.0606 435.068 79.2727C437.553 81.4848 439.477 84.0909 440.841 87.0909C442.235 90.0909 442.947 93.5303 442.977 97.4091C442.947 103.106 441.492 108.045 438.614 112.227C435.765 116.379 431.644 119.606 426.25 121.909C420.886 124.182 414.417 125.318 406.841 125.318C399.326 125.318 392.78 124.167 387.205 121.864C381.659 119.561 377.326 116.152 374.205 111.636C371.114 107.091 369.492 101.47 369.341 94.7727H388.386C388.598 97.8939 389.492 100.5 391.068 102.591C392.674 104.652 394.811 106.212 397.477 107.273C400.174 108.303 403.22 108.818 406.614 108.818C409.947 108.818 412.841 108.333 415.295 107.364C417.78 106.394 419.705 105.045 421.068 103.318C422.432 101.591 423.114 99.6061 423.114 97.3636C423.114 95.2727 422.492 93.5152 421.25 92.0909C420.038 90.6667 418.25 89.4545 415.886 88.4545C413.553 87.4545 410.689 86.5455 407.295 85.7273L397.159 83.1818C389.311 81.2727 383.114 78.2879 378.568 74.2273C374.023 70.1667 371.765 64.697 371.795 57.8182C371.765 52.1818 373.265 47.2576 376.295 43.0455C379.356 38.8333 383.553 35.5455 388.886 33.1818C394.22 30.8182 400.28 29.6364 407.068 29.6364C413.977 29.6364 420.008 30.8182 425.159 33.1818C430.341 35.5455 434.371 38.8333 437.25 43.0455C440.129 47.2576 441.614 52.1364 441.705 57.6818H422.841Z",
                                            "fill",
                                            "#0F172A",
                                        ],
                                        [
                                            "d",
                                            "M102.3 53H88.7C87.7611 53 87 53.6207 87 54.3864V112.614C87 113.379 87.7611 114 88.7 114H102.3C103.239 114 104 113.379 104 112.614V54.3864C104 53.6207 103.239 53 102.3 53Z",
                                            "fill",
                                            "#0F172A",
                                        ],
                                        [
                                            "d",
                                            "M52.3 53H38.7C37.7611 53 37 53.6207 37 54.3864V112.614C37 113.379 37.7611 114 38.7 114H52.3C53.2389 114 54 113.379 54 112.614V54.3864C54 53.6207 53.2389 53 52.3 53Z",
                                            "fill",
                                            "#0F172A",
                                        ],
                                        [
                                            "d",
                                            "M87.5769 39H53.4231C52.6371 39 52 39.7163 52 40.6V53.4C52 54.2837 52.6371 55 53.4231 55H87.5769C88.3629 55 89 54.2837 89 53.4V40.6C89 39.7163 88.3629 39 87.5769 39Z",
                                            "fill",
                                            "#0F172A",
                                        ],
                                        [
                                            "d",
                                            "M87.5769 77H53.4231C52.6371 77 52 77.7163 52 78.6V91.4C52 92.2837 52.6371 93 53.4231 93H87.5769C88.3629 93 89 92.2837 89 91.4V78.6C89 77.7163 88.3629 77 87.5769 77Z",
                                            "fill",
                                            "#0F172A",
                                        ],
                                        [
                                            1,
                                            "mt-8",
                                            "text-4xl",
                                            "font-bold",
                                            "tracking-tight",
                                            "leading-tight",
                                            "flex",
                                            "text-center",
                                        ],
                                        [
                                            1,
                                            "text-blue-500",
                                            "text-center",
                                            "ml-2",
                                        ],
                                        [
                                            1,
                                            "flex",
                                            "justify-center",
                                            "mt-4",
                                            "font-medium",
                                        ],
                                        [4, "ngIf"],
                                        [
                                            1,
                                            "mt-8",
                                            "text-md",
                                            "font-medium",
                                            "text-secondary",
                                            "text-center",
                                        ],
                                        [
                                            1,
                                            "ml-1",
                                            "text-blue-500",
                                            "hover:underline",
                                            3,
                                            "routerLink",
                                        ],
                                    ],
                                    template: function (i, g) {
                                        1 & i &&
                                            (t.TgZ(0, "div", 0)(1, "div", 1)(
                                                2,
                                                "div",
                                                2
                                            )(3, "div", 3),
                                            t.O4$(),
                                            t.TgZ(4, "svg", 4),
                                            t._UZ(5, "path", 5)(6, "path", 6)(
                                                7,
                                                "path",
                                                7
                                            )(8, "path", 8)(9, "path", 9)(
                                                10,
                                                "path",
                                                10
                                            ),
                                            t.qZA(),
                                            t.TgZ(11, "svg", 11),
                                            t._UZ(12, "path", 12)(
                                                13,
                                                "path",
                                                6
                                            )(14, "path", 13)(15, "path", 14)(
                                                16,
                                                "path",
                                                15
                                            )(17, "path", 16),
                                            t.qZA()(),
                                            t.kcU(),
                                            t.TgZ(18, "div", 17),
                                            t._uU(19, " You have "),
                                            t.TgZ(20, "h1", 18),
                                            t._uU(21, "signed out!"),
                                            t.qZA()(),
                                            t.TgZ(22, "div", 19),
                                            t.YNc(
                                                23,
                                                l,
                                                3,
                                                4,
                                                "ng-container",
                                                20
                                            ),
                                            t.YNc(
                                                24,
                                                b,
                                                2,
                                                0,
                                                "ng-container",
                                                20
                                            ),
                                            t.qZA(),
                                            t.TgZ(25, "div", 21)(26, "span"),
                                            t._uU(27, "Go to"),
                                            t.qZA(),
                                            t.TgZ(28, "a", 22),
                                            t._uU(29, "sign in "),
                                            t.qZA()()()()()),
                                            2 & i &&
                                                (t.xp6(23),
                                                t.Q6J("ngIf", g.countdown > 0),
                                                t.xp6(1),
                                                t.Q6J(
                                                    "ngIf",
                                                    0 === g.countdown
                                                ),
                                                t.xp6(4),
                                                t.Q6J(
                                                    "routerLink",
                                                    t.DdM(3, H)
                                                ));
                                    },
                                    dependencies: [d.yS, o.O5, o.Gx],
                                    encapsulation: 2,
                                })),
                                a
                            );
                        })(),
                    },
                ];
            let y = (() => {
                class a {}
                return (
                    (a.ɵfac = function (i) {
                        return new (i || a)();
                    }),
                    (a.ɵmod = t.oAB({ type: a })),
                    (a.ɵinj = t.cJS({
                        imports: [d.Bz.forChild(Z), u.ot, e.J, f.m],
                    })),
                    a
                );
            })();
        },
    },
]);
