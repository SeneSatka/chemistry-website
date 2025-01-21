import type { ElementType } from "./Element";
import type Element from "./Element";

export const getType = (element: Element): ElementType => {
  if (element.category === "alkali metal") return "Alkali Metal";
  else if (element.category === "alkaline earth metal")
    return "Alkaline Earth Metal";
  else if (element.category === "transition metal") return "Transition Metal";
  else if (element.category === "post-transition metal")
    return "Post Transition Metal";
  else if (element.category === "metalloid") return "Metalloid";
  else if (element.category === "reactive nonmetal") return "Reactive Nonmetal";
  else if (element.category === "noble gas") return "Noble Gas";
  else if (element.category === "lanthanide") return "Lanthanide";
  else if (element.category === "actinide") return "Actinide";
  else return "Unknown";
};
export const getTextColor = (type: ElementType): string => {
  if (type === "Alkali Metal")
    return "text-shadow: 0 0 2px #fff,0 0 3px #fff, 0 0 9px #fa2323,0 0 15px #fa2323, 0 0 18px #fa2323,0 0 18px #fa2323;";
  else if (type === "Alkaline Earth Metal")
    return "text-shadow: 0 0 2px #fff,0 0 3px #fff, 0 0 9px #e0812d,0 0 15px #e0812d, 0 0 18px #e0812d,0 0 18px #e0812d;";
  else if (type === "Transition Metal")
    return "text-shadow: 0 0 2px #fff,0 0 3px #fff, 0 0 9px #bdbf2c,0 0 15px #bdbf2c, 0 0 18px #bdbf2c,0 0 18px #bdbf2c;";
  else if (type === "Post Transition Metal")
    return "text-shadow: 0 0 2px #fff,0 0 3px #fff, 0 0 9px #1bd124,0 0 15px #1bd124, 0 0 18px #1bd124,0 0 18px #1bd124;";
  else if (type === "Metalloid")
    return "text-shadow: 0 0 2px #fff,0 0 3px #fff, 0 0 9px #0f8dd6,0 0 15px #0f8dd6, 0 0 18px #0f8dd6,0 0 18px #0f8dd6;";
  else if (type === "Reactive Nonmetal")
    return "text-shadow: 0 0 2px #fff,0 0 3px #fff, 0 0 9px #3e1cfc,0 0 15px #3e1cfc, 0 0 18px #3e1cfc,0 0 18px #3e1cfc;";
  else if (type === "Noble Gas")
    return "text-shadow: 0 0 2px #fff,0 0 3px #fff, 0 0 9px #d71cfc,0 0 15px #d71cfc, 0 0 18px #d71cfc,0 0 18px #d71cfc;";
  else if (type === "Lanthanide")
    return "text-shadow: 0 0 2px #fff,0 0 3px #fff, 0 0 9px #1c4dfc,0 0 15px #1c4dfc, 0 0 18px #1c4dfc,0 0 18px #1c4dfc;";
  else if (type === "Actinide")
    return "text-shadow: 0 0 2px #fff,0 0 3px #fff, 0 0 9px #523d26,0 0 15px #523d26, 0 0 18px #523d26,0 0 18px #523d26;";
  else if (type === "Unknown")
    return "text-shadow: 0 0 2px #fff,0 0 3px #fff, 0 0 9px #454242,0 0 15px #454242, 0 0 18px #454242,0 0 18px #454242;";
  else throw new Error(`Unknown element type: ${type}`);
};
export const getNeon = (type: ElementType) => {
  if (type === "Alkali Metal")
    return `shadow-[inset_0_0_7px_#d10404,inset_0_0_7px_#d10404,inset_0_0_16px_#d10404,0_0_2px_#fff,0_0_7px_#d10404,0_0_7px_#d10404,0_0_16px_#d10404]`;
  else if (type === "Alkaline Earth Metal")
    return `shadow-[inset_0_0_7px_#e0812d,inset_0_0_7px_#e0812d,inset_0_0_16px_#e0812d,0_0_2px_#fff,0_0_7px_#e0812d,0_0_7px_#e0812d,0_0_16px_#e0812d]`;
  else if (type === "Transition Metal")
    return `shadow-[inset_0_0_7px_#bdbf2c,inset_0_0_7px_#bdbf2c,inset_0_0_16px_#bdbf2c,0_0_2px_#fff,0_0_7px_#bdbf2c,0_0_7px_#bdbf2c,0_0_16px_#bdbf2c]`;
  else if (type === "Post Transition Metal")
    return `shadow-[inset_0_0_7px_#1bd124,inset_0_0_7px_#1bd124,inset_0_0_16px_#1bd124,0_0_2px_#fff,0_0_7px_#1bd124,0_0_7px_#1bd124,0_0_16px_#1bd124]`;
  else if (type === "Metalloid")
    return `shadow-[inset_0_0_7px_#0f8dd6,inset_0_0_7px_#0f8dd6,inset_0_0_16px_#0f8dd6,0_0_2px_#fff,0_0_7px_#0f8dd6,0_0_7px_#0f8dd6,0_0_16px_#0f8dd6]`;
  else if (type === "Reactive Nonmetal")
    return `shadow-[inset_0_0_7px_#3e1cfc,inset_0_0_7px_#3e1cfc,inset_0_0_16px_#3e1cfc,0_0_2px_#fff,0_0_7px_#3e1cfc,0_0_7px_#3e1cfc,0_0_16px_#3e1cfc]`;
  else if (type === "Noble Gas")
    return `shadow-[inset_0_0_7px_#d71cfc,inset_0_0_7px_#d71cfc,inset_0_0_16px_#d71cfc,0_0_2px_#fff,0_0_7px_#d71cfc,0_0_7px_#d71cfc,0_0_16px_#d71cfc]`;
  else if (type === "Lanthanide")
    return `shadow-[inset_0_0_7px_#1c4dfc,inset_0_0_7px_#1c4dfc,inset_0_0_16px_#1c4dfc,0_0_2px_#fff,0_0_7px_#1c4dfc,0_0_7px_#1c4dfc,0_0_16px_#1c4dfc]`;
  else if (type === "Actinide")
    return `shadow-[inset_0_0_7px_#523d26,inset_0_0_7px_#523d26,inset_0_0_16px_#523d26,0_0_2px_#fff,0_0_7px_#523d26,0_0_7px_#523d26,0_0_16px_#523d26]`;
  else if (type === "Unknown")
    return `shadow-[inset_0_0_7px_#454242,inset_0_0_7px_#454242,inset_0_0_16px_#454242,0_0_2px_#fff,0_0_7px_#454242,0_0_7px_#454242,0_0_16px_#454242]`;
  else throw new Error(`Unknown element type: ${type}`);
};
import elements from "./PeriodicTableElements";
export const test = () => {
  let set = new Set();
  elements.forEach((element) => {
    set.add(element.category);
  });
  set.forEach((element) => {
    console.log(element);
  });
};
