export default function getCSSVariableValue(variable) {
  if (typeof window !== 'undefined') {
    return window.getComputedStyle(document.documentElement).getPropertyValue(variable);
  }
}
