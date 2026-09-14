/**
 * Presets de spring compartidos, siguiendo el modelo de Apple (damping/response
 * en vez de masa-rigidez-amortiguación cruda). `bounce: 0` = crítico, sin
 * rebote — el default para casi toda la UI. Un poco de `bounce` solo se usa
 * donde el propio gesto ya trae momentum (tap de un botón, un flick).
 */
export const springSmooth = { type: "spring", duration: 0.35, bounce: 0 } as const;
export const springSnappy = { type: "spring", duration: 0.25, bounce: 0 } as const;
export const springBouncy = { type: "spring", duration: 0.4, bounce: 0.2 } as const;
