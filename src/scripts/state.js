/*
 * Store global state here.
 *
 * To access:
 *   import {$store} from "../scripts/state"
 *   const value = value.get()
 *   $store.set(value)
 *
 * In React:
 *   import {useStore} from "@nanostores/react"
 *   const value = useStore($store)
 *   const setValue = $store.set
 * */

import { atom } from "nanostores";

export const $searched = atom(false);
export const $results = atom([]);
export const $postalCode = atom("");
