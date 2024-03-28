import React from "react";
import { cn } from "../../utils/cn";
import buttonVariants from "./Button.styles";
import { BKButtonProps } from "./Button.types";
import ButtonWrapper from "./ButtonWrapper.component";

/**
 * The Button component renders a button element with specified props and styling.
 * @param {BKButtonProps}  - The `Button` component takes the following parameters:
 * @param {string} className - The className prop is a string that is used to apply additional tailwind classes to the button element.
 * @param {ReactNode} children - The children prop is a ReactNode that is used to render the content of the button element.
 * @param {BKButtonVariant} variant - The variant prop is a string that is used to determine the styling of the button element. It can be one of the following values: "contained", "outlined", or "text".
 * @param {string} href - The href prop is a string that is used to determine the href attribute of the button element. If the href prop is provided, the button element will be rendered as an anchor element with the specified href attribute.
 * @returns The `Button` component is being returned. It renders a button element with the specified
 */
const Button = React.forwardRef<HTMLButtonElement, BKButtonProps>(
  ({ className, variant, size, href, children, ...props }, ref) => {
    return (
      <ButtonWrapper href={href}>
        <button
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </button>
      </ButtonWrapper>
    );
  }
);

export default Button;
