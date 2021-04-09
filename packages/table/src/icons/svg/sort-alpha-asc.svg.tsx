import { FunctionComponent } from 'react';

export const icon: FunctionComponent<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" {...props}>
    <title>sort-alpha-asc</title>
    <path d="M10 24v-24h-4v24h-5l7 7 7-7h-5z"></path>
    <path d="M29 32h-8c-0.369 0-0.708-0.203-0.882-0.528s-0.155-0.72 0.050-1.027l6.963-10.445h-6.131c-0.552 0-1-0.448-1-1s0.448-1 1-1h8c0.369 0 0.708 0.203 0.882 0.528s0.155 0.72-0.050 1.027l-6.963 10.445h6.131c0.552 0 1 0.448 1 1s-0.448 1-1 1z"></path>
    <path d="M31.894 12.553l-6-12c-0.169-0.339-0.516-0.553-0.894-0.553s-0.725 0.214-0.895 0.553l-6 12c-0.247 0.494-0.047 1.095 0.447 1.342 0.144 0.072 0.296 0.106 0.447 0.106 0.367 0 0.72-0.203 0.895-0.553l1.724-3.447h6.764l1.724 3.447c0.247 0.494 0.848 0.694 1.342 0.447s0.694-0.848 0.447-1.342zM22.618 8l2.382-4.764 2.382 4.764h-4.764z"></path>
  </svg>
);

export default icon;
