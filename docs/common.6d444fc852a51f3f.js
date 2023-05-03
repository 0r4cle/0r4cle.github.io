"use strict";
(self.webpackChunkamos = self.webpackChunkamos || []).push([
    [592],
    {
        5017: (E, m, d) => {
            d.d(m, { A8: () => p, Ov: () => g });
            var f = d(7579),
                u = d(4650);
            class g {
                constructor(e = !1, t, s = !0, n) {
                    (this._multiple = e),
                        (this._emitChanges = s),
                        (this.compareWith = n),
                        (this._selection = new Set()),
                        (this._deselectedToEmit = []),
                        (this._selectedToEmit = []),
                        (this.changed = new f.x()),
                        t &&
                            t.length &&
                            (e
                                ? t.forEach((i) => this._markSelected(i))
                                : this._markSelected(t[0]),
                            (this._selectedToEmit.length = 0));
                }
                get selected() {
                    return (
                        this._selected ||
                            (this._selected = Array.from(
                                this._selection.values()
                            )),
                        this._selected
                    );
                }
                select(...e) {
                    this._verifyValueAssignment(e),
                        e.forEach((s) => this._markSelected(s));
                    const t = this._hasQueuedChanges();
                    return this._emitChangeEvent(), t;
                }
                deselect(...e) {
                    this._verifyValueAssignment(e),
                        e.forEach((s) => this._unmarkSelected(s));
                    const t = this._hasQueuedChanges();
                    return this._emitChangeEvent(), t;
                }
                setSelection(...e) {
                    this._verifyValueAssignment(e);
                    const t = this.selected,
                        s = new Set(e);
                    e.forEach((i) => this._markSelected(i)),
                        t
                            .filter((i) => !s.has(i))
                            .forEach((i) => this._unmarkSelected(i));
                    const n = this._hasQueuedChanges();
                    return this._emitChangeEvent(), n;
                }
                toggle(e) {
                    return this.isSelected(e)
                        ? this.deselect(e)
                        : this.select(e);
                }
                clear(e = !0) {
                    this._unmarkAll();
                    const t = this._hasQueuedChanges();
                    return e && this._emitChangeEvent(), t;
                }
                isSelected(e) {
                    if (this.compareWith) {
                        for (const t of this._selection)
                            if (this.compareWith(t, e)) return !0;
                        return !1;
                    }
                    return this._selection.has(e);
                }
                isEmpty() {
                    return 0 === this._selection.size;
                }
                hasValue() {
                    return !this.isEmpty();
                }
                sort(e) {
                    this._multiple && this.selected && this._selected.sort(e);
                }
                isMultipleSelection() {
                    return this._multiple;
                }
                _emitChangeEvent() {
                    (this._selected = null),
                        (this._selectedToEmit.length ||
                            this._deselectedToEmit.length) &&
                            (this.changed.next({
                                source: this,
                                added: this._selectedToEmit,
                                removed: this._deselectedToEmit,
                            }),
                            (this._deselectedToEmit = []),
                            (this._selectedToEmit = []));
                }
                _markSelected(e) {
                    this.isSelected(e) ||
                        (this._multiple || this._unmarkAll(),
                        this.isSelected(e) || this._selection.add(e),
                        this._emitChanges && this._selectedToEmit.push(e));
                }
                _unmarkSelected(e) {
                    this.isSelected(e) &&
                        (this._selection.delete(e),
                        this._emitChanges && this._deselectedToEmit.push(e));
                }
                _unmarkAll() {
                    this.isEmpty() ||
                        this._selection.forEach((e) => this._unmarkSelected(e));
                }
                _verifyValueAssignment(e) {}
                _hasQueuedChanges() {
                    return !(
                        !this._deselectedToEmit.length &&
                        !this._selectedToEmit.length
                    );
                }
            }
            let p = (() => {
                class h {
                    constructor() {
                        this._listeners = [];
                    }
                    notify(t, s) {
                        for (let n of this._listeners) n(t, s);
                    }
                    listen(t) {
                        return (
                            this._listeners.push(t),
                            () => {
                                this._listeners = this._listeners.filter(
                                    (s) => t !== s
                                );
                            }
                        );
                    }
                    ngOnDestroy() {
                        this._listeners = [];
                    }
                }
                return (
                    (h.ɵfac = function (t) {
                        return new (t || h)();
                    }),
                    (h.ɵprov = u.Yz7({
                        token: h,
                        factory: h.ɵfac,
                        providedIn: "root",
                    })),
                    h
                );
            })();
        },
    },
]);
