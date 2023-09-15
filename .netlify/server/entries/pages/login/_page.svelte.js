import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<form data-svelte-h="svelte-g0v8ud"> <div class="grid"> <label for="firstname">First name
			<input type="text" id="firstname" name="firstname" placeholder="First name" required></label> <label for="lastname">Last name
			<input type="text" id="lastname" name="lastname" placeholder="Last name" required></label></div>  <label for="email">Email address</label> <input type="email" id="email" name="email" placeholder="Email address" required> <small>We&#39;ll never share your email with anyone else.</small>  <button type="submit">Submit</button></form>`;
});
export {
  Page as default
};
