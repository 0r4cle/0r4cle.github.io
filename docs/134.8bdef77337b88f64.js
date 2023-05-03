"use strict";
(self.webpackChunkamos = self.webpackChunkamos || []).push([
    [134],
    {
        8134: (L, u, r) => {
            r.r(u), r.d(u, { AuthResetPasswordModule: () => Y });
            var c = r(2510),
                p = r(4859),
                l = r(9549),
                f = r(7392),
                C = r(4144),
                h = r(1572),
                w = r(5804),
                g = r(7775),
                A = r(4466),
                d = r(4006),
                Z = r(8746),
                v = r(8288);
            class x {
                static isEmptyInputValue(e) {
                    return null == e || 0 === e.length;
                }
                static mustMatch(e, o) {
                    return (n) => {
                        const i = n.get(e),
                            a = n.get(o);
                        if (
                            !i ||
                            !a ||
                            (a.hasError("mustMatch") &&
                                (delete a.errors.mustMatch,
                                a.updateValueAndValidity()),
                            this.isEmptyInputValue(a.value) ||
                                i.value === a.value)
                        )
                            return null;
                        const m = { mustMatch: !0 };
                        return a.setErrors(m), m;
                    };
                }
            }
            var t = r(4650),
                y = r(8951),
                P = r(2494),
                T = r(6895);
            const I = ["resetPasswordNgForm"];
            function R(s, e) {
                if (
                    (1 & s && (t.TgZ(0, "amos-alert", 30), t._uU(1), t.qZA()),
                    2 & s)
                ) {
                    const o = t.oxw();
                    t.Q6J("appearance", "outline")("showIcon", !1)(
                        "type",
                        o.alert.type
                    )("@shake", "error" === o.alert.type),
                        t.xp6(1),
                        t.hij(" ", o.alert.message, " ");
                }
            }
            function F(s, e) {
                1 & s && t._UZ(0, "mat-icon", 31),
                    2 & s && t.Q6J("svgIcon", "heroicons_solid:eye");
            }
            function J(s, e) {
                1 & s && t._UZ(0, "mat-icon", 31),
                    2 & s && t.Q6J("svgIcon", "heroicons_solid:eye-off");
            }
            function M(s, e) {
                1 & s && t._UZ(0, "mat-icon", 31),
                    2 & s && t.Q6J("svgIcon", "heroicons_solid:eye");
            }
            function Q(s, e) {
                1 & s && t._UZ(0, "mat-icon", 31),
                    2 & s && t.Q6J("svgIcon", "heroicons_solid:eye-off");
            }
            function H(s, e) {
                1 & s &&
                    (t.TgZ(0, "mat-error"),
                    t._uU(1, " Password confirmation is required "),
                    t.qZA());
            }
            function N(s, e) {
                1 & s &&
                    (t.TgZ(0, "mat-error"),
                    t._uU(1, " Passwords must match "),
                    t.qZA());
            }
            function U(s, e) {
                1 & s &&
                    (t.TgZ(0, "span"),
                    t._uU(1, " Reset your password "),
                    t.qZA());
            }
            function V(s, e) {
                1 & s && t._UZ(0, "mat-progress-spinner", 32),
                    2 & s && t.Q6J("diameter", 24)("mode", "indeterminate");
            }
            const b = function () {
                    return ["/sign-in"];
                },
                _ = [
                    {
                        path: "",
                        component: (() => {
                            class s {
                                constructor(o, n) {
                                    (this._authService = o),
                                        (this._formBuilder = n),
                                        (this.alert = {
                                            type: "success",
                                            message: "",
                                        }),
                                        (this.showAlert = !1);
                                }
                                ngOnInit() {
                                    this.resetPasswordForm =
                                        this._formBuilder.group(
                                            {
                                                password: ["", d.kI.required],
                                                passwordConfirm: [
                                                    "",
                                                    d.kI.required,
                                                ],
                                            },
                                            {
                                                validators: x.mustMatch(
                                                    "password",
                                                    "passwordConfirm"
                                                ),
                                            }
                                        );
                                }
                                resetPassword() {
                                    this.resetPasswordForm.invalid ||
                                        (this.resetPasswordForm.disable(),
                                        (this.showAlert = !1),
                                        this._authService
                                            .resetPassword(
                                                this.resetPasswordForm.get(
                                                    "password"
                                                ).value
                                            )
                                            .pipe(
                                                (0, Z.x)(() => {
                                                    this.resetPasswordForm.enable(),
                                                        this.resetPasswordNgForm.resetForm(),
                                                        (this.showAlert = !0);
                                                })
                                            )
                                            .subscribe(
                                                (o) => {
                                                    this.alert = {
                                                        type: "success",
                                                        message:
                                                            "Your password has been reset.",
                                                    };
                                                },
                                                (o) => {
                                                    this.alert = {
                                                        type: "error",
                                                        message:
                                                            "Something went wrong, please try again.",
                                                    };
                                                }
                                            ));
                                }
                            }
                            return (
                                (s.ɵfac = function (o) {
                                    return new (o || s)(
                                        t.Y36(y.e),
                                        t.Y36(d.QS)
                                    );
                                }),
                                (s.ɵcmp = t.Xpm({
                                    type: s,
                                    selectors: [["auth-reset-password"]],
                                    viewQuery: function (o, n) {
                                        if ((1 & o && t.Gf(I, 5), 2 & o)) {
                                            let i;
                                            t.iGM((i = t.CRH())) &&
                                                (n.resetPasswordNgForm =
                                                    i.first);
                                        }
                                    },
                                    decls: 48,
                                    vars: 16,
                                    consts: [
                                        [
                                            1,
                                            "flex",
                                            "flex-col",
                                            "sm:flex-row",
                                            "items-center",
                                            "md:items-start",
                                            "sm:justify-center",
                                            "md:justify-start",
                                            "flex-auto",
                                            "min-w-0",
                                        ],
                                        [
                                            "width",
                                            "100",
                                            "height",
                                            "31",
                                            "viewBox",
                                            "0 0 100 31",
                                            "fill",
                                            "none",
                                            "xmlns",
                                            "http://www.w3.org/2000/svg",
                                            1,
                                            "absolute",
                                            "mt-10",
                                            "ml-10",
                                        ],
                                        [
                                            "d",
                                            "M35.011 4.22909H40.4905L46.2778 18.2176H46.524L52.3113 4.22909H57.7908V25.0492H53.4811V11.4978H53.3067L47.8682 24.9475H44.9336L39.4952 11.447H39.3207V25.0492H35.011V4.22909Z",
                                            "fill",
                                            "#0F172A",
                                        ],
                                        [
                                            "d",
                                            "M80.7629 14.6391C80.7629 16.9096 80.3285 18.8411 79.4598 20.4338C78.5978 22.0265 77.4212 23.243 75.9299 24.0834C74.4455 24.917 72.7763 25.3339 70.9225 25.3339C69.055 25.3339 67.379 24.9137 65.8945 24.0733C64.4101 23.2329 63.2369 22.0163 62.3749 20.4236C61.513 18.831 61.082 16.9028 61.082 14.6391C61.082 12.3687 61.513 10.4372 62.3749 8.84448C63.2369 7.2518 64.4101 6.03865 65.8945 5.20503C67.379 4.36463 69.055 3.94444 70.9225 3.94444C72.7763 3.94444 74.4455 4.36463 75.9299 5.20503C77.4212 6.03865 78.5978 7.2518 79.4598 8.84448C80.3285 10.4372 80.7629 12.3687 80.7629 14.6391ZM76.2583 14.6391C76.2583 13.1685 76.0359 11.9282 75.5913 10.9184C75.1535 9.90853 74.5344 9.14269 73.734 8.62083C72.9337 8.09897 71.9965 7.83804 70.9225 7.83804C69.8485 7.83804 68.9113 8.09897 68.1109 8.62083C67.3106 9.14269 66.688 9.90853 66.2434 10.9184C65.8056 11.9282 65.5867 13.1685 65.5867 14.6391C65.5867 16.1098 65.8056 17.3501 66.2434 18.3599C66.688 19.3698 67.3106 20.1356 68.1109 20.6575C68.9113 21.1793 69.8485 21.4402 70.9225 21.4402C71.9965 21.4402 72.9337 21.1793 73.734 20.6575C74.5344 20.1356 75.1535 19.3698 75.5913 18.3599C76.0359 17.3501 76.2583 16.1098 76.2583 14.6391Z",
                                            "fill",
                                            "#0F172A",
                                        ],
                                        [
                                            "d",
                                            "M95.4543 10.2169C95.3722 9.39684 95.0199 8.75977 94.3974 8.30568C93.7749 7.8516 92.9301 7.62455 91.8629 7.62455C91.1378 7.62455 90.5255 7.72621 90.0262 7.92954C89.5268 8.12608 89.1437 8.40057 88.8769 8.75299C88.617 9.10541 88.487 9.50528 88.487 9.95259C88.4733 10.3253 88.552 10.6507 88.723 10.9285C88.9009 11.2064 89.1437 11.447 89.4515 11.6503C89.7594 11.8469 90.1151 12.0197 90.5187 12.1688C90.9223 12.3111 91.3533 12.4331 91.8116 12.5348L93.6997 12.9821C94.6163 13.1854 95.4577 13.4565 96.2239 13.7954C96.9901 14.1342 97.6536 14.551 98.2146 15.0458C98.7755 15.5405 99.2099 16.1234 99.5177 16.7944C99.8324 17.4653 99.9932 18.2345 100 19.1021C99.9932 20.3762 99.6648 21.4809 99.0149 22.4162C98.3719 23.3447 97.4416 24.0665 96.2239 24.5816C95.0131 25.0899 93.5526 25.344 91.8424 25.344C90.1459 25.344 88.6683 25.0865 87.4096 24.5714C86.1577 24.0563 85.1795 23.2939 84.4749 22.284C83.7771 21.2674 83.4111 20.0102 83.3769 18.5124H87.6764C87.7242 19.2105 87.926 19.7933 88.2818 20.261C88.6443 20.7218 89.1266 21.0709 89.7286 21.3081C90.3374 21.5385 91.0249 21.6537 91.7911 21.6537C92.5436 21.6537 93.1969 21.5453 93.751 21.3284C94.3119 21.1115 94.7463 20.81 95.0541 20.4236C95.362 20.0373 95.5159 19.5934 95.5159 19.0919C95.5159 18.6242 95.3756 18.2312 95.0952 17.9126C94.8215 17.5941 94.4179 17.323 93.8844 17.0993C93.3576 16.8757 92.7112 16.6724 91.945 16.4894L89.6568 15.9201C87.885 15.4931 86.4861 14.8255 85.46 13.9174C84.4338 13.0092 83.9242 11.7859 83.931 10.2474C83.9242 8.98681 84.2628 7.88548 84.9469 6.94343C85.6378 6.00137 86.5853 5.26603 87.7892 4.73739C88.9932 4.20875 90.3614 3.94444 91.8937 3.94444C93.4534 3.94444 94.8147 4.20875 95.9776 4.73739C97.1474 5.26603 98.0572 6.00137 98.7071 6.94343C99.357 7.88548 99.6922 8.97664 99.7127 10.2169H95.4543Z",
                                            "fill",
                                            "#0F172A",
                                        ],
                                        [
                                            "d",
                                            "M15.915 3.39506C22.7585 3.39506 28.3288 8.7963 28.3288 15.4321C28.3288 22.0679 22.7585 27.4691 15.915 27.4691C9.07157 27.4691 3.50131 22.0679 3.50131 15.4321C3.50131 8.7963 9.07157 3.39506 15.915 3.39506ZM15.915 0C7.12675 0 0 6.91049 0 15.4321C0 23.9537 7.12675 30.8642 15.915 30.8642C24.7033 30.8642 31.8301 23.9537 31.8301 15.4321C31.8301 6.91049 24.7033 0 15.915 0Z",
                                            "fill",
                                            "#376DED",
                                        ],
                                        [
                                            "fill-rule",
                                            "evenodd",
                                            "clip-rule",
                                            "evenodd",
                                            "d",
                                            "M19.7701 6.03865H12.06C11.8826 6.03865 11.7388 6.19885 11.7388 6.39649V9.1698H8.73634C8.52439 9.1698 8.35257 9.30861 8.35257 9.47986V22.5026C8.35257 22.6739 8.52439 22.8127 8.73634 22.8127H11.8065C12.0184 22.8127 12.1902 22.6739 12.1902 22.5026V18.1159H19.6398V22.5026C19.6398 22.6739 19.8116 22.8127 20.0236 22.8127H23.0937C23.3057 22.8127 23.4775 22.6739 23.4775 22.5026V9.47986C23.4775 9.30861 23.3057 9.1698 23.0937 9.1698H20.0913V6.39649C20.0913 6.19885 19.9475 6.03865 19.7701 6.03865ZM19.6398 14.5375V9.61711H12.1902V14.5375H19.6398Z",
                                            "fill",
                                            "#0F172A",
                                        ],
                                        [
                                            1,
                                            "md:flex",
                                            "md:items-center",
                                            "md:justify-end",
                                            "w-full",
                                            "sm:w-auto",
                                            "md:h-full",
                                            "md:w-1/2",
                                            "py-8",
                                            "px-4",
                                            "sm:p-12",
                                            "md:p-16",
                                            "sm:rounded-2xl",
                                            "md:rounded-none",
                                            "sm:shadow",
                                            "md:shadow-none",
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
                                        [1, "w-12"],
                                        ["src", "assets/images/logo/logo.svg"],
                                        [
                                            1,
                                            "mt-8",
                                            "text-4xl",
                                            "font-extrabold",
                                            "tracking-tight",
                                            "leading-tight",
                                        ],
                                        [1, "mt-0.5", "font-medium"],
                                        [
                                            "class",
                                            "mt-8 -mb-4",
                                            3,
                                            "appearance",
                                            "showIcon",
                                            "type",
                                            4,
                                            "ngIf",
                                        ],
                                        [1, "mt-8", 3, "formGroup"],
                                        ["resetPasswordNgForm", "ngForm"],
                                        [1, "w-full"],
                                        [
                                            "id",
                                            "password",
                                            "matInput",
                                            "",
                                            "type",
                                            "password",
                                            3,
                                            "formControlName",
                                        ],
                                        ["passwordField", ""],
                                        [
                                            "mat-icon-button",
                                            "",
                                            "type",
                                            "button",
                                            "matSuffix",
                                            "",
                                            3,
                                            "click",
                                        ],
                                        [
                                            "class",
                                            "icon-size-5",
                                            3,
                                            "svgIcon",
                                            4,
                                            "ngIf",
                                        ],
                                        [
                                            "id",
                                            "password-confirm",
                                            "matInput",
                                            "",
                                            "type",
                                            "password",
                                            3,
                                            "formControlName",
                                        ],
                                        ["passwordConfirmField", ""],
                                        [4, "ngIf"],
                                        [
                                            "mat-flat-button",
                                            "",
                                            1,
                                            "amos-mat-button-large",
                                            "w-full",
                                            "mt-3",
                                            3,
                                            "color",
                                            "disabled",
                                            "click",
                                        ],
                                        [3, "diameter", "mode", 4, "ngIf"],
                                        [
                                            1,
                                            "mt-8",
                                            "text-md",
                                            "font-medium",
                                            "text-secondary",
                                        ],
                                        [
                                            1,
                                            "ml-1",
                                            "text-primary-500",
                                            "hover:underline",
                                            3,
                                            "routerLink",
                                        ],
                                        [
                                            1,
                                            "relative",
                                            "hidden",
                                            "md:flex",
                                            "flex-auto",
                                            "items-center",
                                            "justify-center",
                                            "w-ful",
                                            "h-full",
                                            "p-0",
                                            "lg:px-28",
                                            "overflow-hidden",
                                            "bg-white",
                                            "dark:bg-neutral-900",
                                        ],
                                        [
                                            "src",
                                            "/assets/images/logo/logg.svg",
                                            1,
                                            "ml-[300px]",
                                            "w-full",
                                            "h-full",
                                            "rounded-2xl",
                                            "object-cover",
                                        ],
                                        [
                                            1,
                                            "mt-8",
                                            "-mb-4",
                                            3,
                                            "appearance",
                                            "showIcon",
                                            "type",
                                        ],
                                        [1, "icon-size-5", 3, "svgIcon"],
                                        [3, "diameter", "mode"],
                                    ],
                                    template: function (o, n) {
                                        if (1 & o) {
                                            const i = t.EpF();
                                            t.TgZ(0, "div", 0),
                                                t.O4$(),
                                                t.TgZ(1, "svg", 1),
                                                t._UZ(2, "path", 2)(
                                                    3,
                                                    "path",
                                                    3
                                                )(4, "path", 4)(5, "path", 5)(
                                                    6,
                                                    "path",
                                                    6
                                                ),
                                                t.qZA(),
                                                t.kcU(),
                                                t.TgZ(7, "div", 7)(8, "div", 8)(
                                                    9,
                                                    "div",
                                                    9
                                                ),
                                                t._UZ(10, "img", 10),
                                                t.qZA(),
                                                t.TgZ(11, "div", 11),
                                                t._uU(
                                                    12,
                                                    " Reset your password "
                                                ),
                                                t.qZA(),
                                                t.TgZ(13, "div", 12),
                                                t._uU(
                                                    14,
                                                    " Create a new password for your account "
                                                ),
                                                t.qZA(),
                                                t.YNc(
                                                    15,
                                                    R,
                                                    2,
                                                    5,
                                                    "amos-alert",
                                                    13
                                                ),
                                                t.TgZ(
                                                    16,
                                                    "form",
                                                    14,
                                                    15
                                                )(
                                                    18,
                                                    "mat-form-field",
                                                    16
                                                )(19, "mat-label"),
                                                t._uU(20, "Password"),
                                                t.qZA(),
                                                t._UZ(21, "input", 17, 18),
                                                t.TgZ(23, "button", 19),
                                                t.NdJ("click", function () {
                                                    t.CHM(i);
                                                    const m = t.MAs(22);
                                                    return t.KtG(
                                                        (m.type =
                                                            "password" ===
                                                            m.type
                                                                ? "text"
                                                                : "password")
                                                    );
                                                }),
                                                t.YNc(
                                                    24,
                                                    F,
                                                    1,
                                                    1,
                                                    "mat-icon",
                                                    20
                                                ),
                                                t.YNc(
                                                    25,
                                                    J,
                                                    1,
                                                    1,
                                                    "mat-icon",
                                                    20
                                                ),
                                                t.qZA(),
                                                t.TgZ(26, "mat-error"),
                                                t._uU(
                                                    27,
                                                    " Password is required "
                                                ),
                                                t.qZA()(),
                                                t.TgZ(
                                                    28,
                                                    "mat-form-field",
                                                    16
                                                )(29, "mat-label"),
                                                t._uU(30, "Password (Confirm)"),
                                                t.qZA(),
                                                t._UZ(31, "input", 21, 22),
                                                t.TgZ(33, "button", 19),
                                                t.NdJ("click", function () {
                                                    t.CHM(i);
                                                    const m = t.MAs(32);
                                                    return t.KtG(
                                                        (m.type =
                                                            "password" ===
                                                            m.type
                                                                ? "text"
                                                                : "password")
                                                    );
                                                }),
                                                t.YNc(
                                                    34,
                                                    M,
                                                    1,
                                                    1,
                                                    "mat-icon",
                                                    20
                                                ),
                                                t.YNc(
                                                    35,
                                                    Q,
                                                    1,
                                                    1,
                                                    "mat-icon",
                                                    20
                                                ),
                                                t.qZA(),
                                                t.YNc(
                                                    36,
                                                    H,
                                                    2,
                                                    0,
                                                    "mat-error",
                                                    23
                                                ),
                                                t.YNc(
                                                    37,
                                                    N,
                                                    2,
                                                    0,
                                                    "mat-error",
                                                    23
                                                ),
                                                t.qZA(),
                                                t.TgZ(38, "button", 24),
                                                t.NdJ("click", function () {
                                                    return n.resetPassword();
                                                }),
                                                t.YNc(39, U, 2, 0, "span", 23),
                                                t.YNc(
                                                    40,
                                                    V,
                                                    1,
                                                    2,
                                                    "mat-progress-spinner",
                                                    25
                                                ),
                                                t.qZA(),
                                                t.TgZ(
                                                    41,
                                                    "div",
                                                    26
                                                )(42, "span"),
                                                t._uU(43, "Return to"),
                                                t.qZA(),
                                                t.TgZ(44, "a", 27),
                                                t._uU(45, "sign in "),
                                                t.qZA()()()()(),
                                                t.TgZ(46, "div", 28),
                                                t._UZ(47, "img", 29),
                                                t.qZA()();
                                        }
                                        if (2 & o) {
                                            const i = t.MAs(22),
                                                a = t.MAs(32);
                                            t.xp6(15),
                                                t.Q6J("ngIf", n.showAlert),
                                                t.xp6(1),
                                                t.Q6J(
                                                    "formGroup",
                                                    n.resetPasswordForm
                                                ),
                                                t.xp6(5),
                                                t.Q6J(
                                                    "formControlName",
                                                    "password"
                                                ),
                                                t.xp6(3),
                                                t.Q6J(
                                                    "ngIf",
                                                    "password" === i.type
                                                ),
                                                t.xp6(1),
                                                t.Q6J(
                                                    "ngIf",
                                                    "text" === i.type
                                                ),
                                                t.xp6(6),
                                                t.Q6J(
                                                    "formControlName",
                                                    "passwordConfirm"
                                                ),
                                                t.xp6(3),
                                                t.Q6J(
                                                    "ngIf",
                                                    "password" === a.type
                                                ),
                                                t.xp6(1),
                                                t.Q6J(
                                                    "ngIf",
                                                    "text" === a.type
                                                ),
                                                t.xp6(1),
                                                t.Q6J(
                                                    "ngIf",
                                                    n.resetPasswordForm
                                                        .get("passwordConfirm")
                                                        .hasError("required")
                                                ),
                                                t.xp6(1),
                                                t.Q6J(
                                                    "ngIf",
                                                    n.resetPasswordForm
                                                        .get("passwordConfirm")
                                                        .hasError("mustMatch")
                                                ),
                                                t.xp6(1),
                                                t.Q6J("color", "primary")(
                                                    "disabled",
                                                    n.resetPasswordForm.disabled
                                                ),
                                                t.xp6(1),
                                                t.Q6J(
                                                    "ngIf",
                                                    !n.resetPasswordForm
                                                        .disabled
                                                ),
                                                t.xp6(1),
                                                t.Q6J(
                                                    "ngIf",
                                                    n.resetPasswordForm.disabled
                                                ),
                                                t.xp6(4),
                                                t.Q6J(
                                                    "routerLink",
                                                    t.DdM(15, b)
                                                );
                                        }
                                    },
                                    dependencies: [
                                        c.yS,
                                        p.lW,
                                        l.TO,
                                        l.KE,
                                        l.hX,
                                        l.R9,
                                        f.Hw,
                                        C.Nt,
                                        h.Ou,
                                        P.W,
                                        T.O5,
                                        d._Y,
                                        d.Fj,
                                        d.JJ,
                                        d.JL,
                                        d.sg,
                                        d.u,
                                    ],
                                    encapsulation: 2,
                                    data: { animation: v.L },
                                })),
                                s
                            );
                        })(),
                    },
                ];
            let Y = (() => {
                class s {}
                return (
                    (s.ɵfac = function (o) {
                        return new (o || s)();
                    }),
                    (s.ɵmod = t.oAB({ type: s })),
                    (s.ɵinj = t.cJS({
                        imports: [
                            c.Bz.forChild(_),
                            p.ot,
                            l.lN,
                            f.Ps,
                            C.c,
                            h.Cq,
                            w.J,
                            g.fC,
                            A.m,
                        ],
                    })),
                    s
                );
            })();
        },
    },
]);
