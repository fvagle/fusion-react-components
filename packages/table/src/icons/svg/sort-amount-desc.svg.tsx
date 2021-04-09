import { FunctionComponent } from 'react';

export const icon: FunctionComponent<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" {...props}>
    <title>sort-amount-desc</title>
    <path d="M10 24v-24h-4v24h-5l7 7 7-7h-5z"></path>
    <path d="M14 0h18v4h-18v-4z"></path>
    <path d="M14 6h14v4h-14v-4z"></path>
    <path d="M14 12h10v4h-10v-4z"></path>
    <path d="M14 18h6v4h-6v-4z"></path>
  </svg>
);

export default icon;
