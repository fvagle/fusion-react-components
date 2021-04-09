import { FunctionComponent } from 'react';

export const icon: FunctionComponent<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" {...props}>
    <title>sort-numberic-desc</title>
    <path d="M10 24v-24h-4v24h-5l7 7 7-7h-5z"></path>
    <path d="M27 32c-0.552 0-1-0.448-1-1v-11h-1c-0.552 0-1-0.448-1-1s0.448-1 1-1h2c0.552 0 1 0.448 1 1v12c0 0.552-0.448 1-1 1z"></path>
    <path d="M29 0h-6c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h5v4h-5c-0.552 0-1 0.448-1 1s0.448 1 1 1h6c0.552 0 1-0.448 1-1v-12c0-0.552-0.448-1-1-1zM24 2h4v4h-4v-4z"></path>
  </svg>
);

export default icon;