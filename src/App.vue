<script setup lang="ts">
	import { onBeforeUnmount, provide } from 'vue';
  	import { RouterLink, RouterView } from 'vue-router';
	import { createEagleEye } from '@webkrafters/vue-eagleeye';
	import {
		contextInjectionKey,
		defaultState,
    type TestState
	} from './context';
  
  const ctx = createEagleEye( defaultState );
  const commit = ( type : unknown ) => ctx.store.setState({ type } as TestState );

	provide ( contextInjectionKey, ctx );
  commit( 'Calculator' );

  const title = '@webkrafters/vue-eagleeye demo';
	const updateType = ( e : KeyboardEvent ) => commit( ( e.target as HTMLInputElement ).value );
  const year = new Date().getFullYear();

  onBeforeUnmount(() => ctx.dispose());

</script>

<template>
  <div class="app">
    <div>
      <h1>
        <img src="@/assets/wklogo-outline.png" alt="wk logo" width="80" height="80" />
        <p>
          <span>{{ title }}</span>
          <a
            href="https://www.npmjs.com/package/@webkrafters/vue-eagleeye"
            rel="no-follow"
          >
            Eagle Eye
          </a>
        </p>
      </h1>
      <main>
        <h1>Demo</h1>
        <h2>A contrived product app.</h2>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">Product</RouterLink>
        </nav>
        <div :style="{ 'margin-bottom': '10px' }">
          <label>Type: <input @keyup="updateType" placeholder="override product type here..." /></label>
        </div>
        <RouterView />
      </main>
    </div>
    <footer>
      <span>&copy;2026</span>
      {{ year > 2026 ? `-${ year } ` : ' ' }}
      <a href="https://webkrafters.tech" rel="no-follow">webKrafters</a>. All rights reserved.
    </footer>
  </div>
</template>

<style scoped>
.app {
	--aquamarine: #1890ee;
	--brand-font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	--grey: #333;
	--navy: #0d4aa6;
	display: flex;
	flex-direction: column;
	min-height: 98.7vh;
	a {
		color: var( --aquamarine );
		&:hover {
			color: var( --navy )
		}
	}
	> div {
		flex: 1 1 auto;
		> h1:first-of-type {
			&::after {
				color: #d44;
				content: 'Open browser console > Fill in the textboxes below > Monitor resulting rendering activities.';
				font-family:  var( --brand-font-family );
				font-size: 1rem;
				left: 0;
				position: absolute;
				top: 100%;
			}
			align-items: center;
			color:  var( --grey );
			display: flex;
			font-family: var( --brand-font-family );
			font-size: 1.725rem;
			margin-top: 0;
			position: relative;
			> img {
				height: 80px;
				margin-right: 16px;
				width: 80px;
			}
			> p {
				margin: 0;
				> * {
					display: block;
					line-height: .95;
				}
				> a {
					font-size: 1.4rem;
					font-style: italic;
					font-variant: all-small-caps
				}
			}
		}
		> main {
			clear: both;
      > nav {
        align-items: self-start;
        display: flex;
        height: 3rem;
        justify-content: space-evenly;
      }
		}
	}
	> footer {
		font-family: var( --brand-font-family );
		flex: 0 0 10px;
		text-align: right;
	}
}
</style>
