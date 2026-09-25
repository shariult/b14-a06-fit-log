function IconBookmark({
  className,
  ...props
}: React.SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      {...props}
    >
      <path
        d="M12.6666 14L7.99992 11.3333L3.33325 14V3.33333C3.33325 2.59745 3.9307 2 4.66659 2H11.3333C12.0691 2 12.6666 2.59745 12.6666 3.33333V14V14"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconBookmark;
