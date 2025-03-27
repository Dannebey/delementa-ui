---
name: UI Component
about: Template for creating new UI component
title: "[Component] "
labels: component, ui
assignees: ""
---

# Component Name Implementation

## Overview

Brief description of the component and its main purpose.

## Requirements

### Core Features

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3

### Props

```typescript
interface ComponentProps {
  // Basic properties
  // Styling properties
  // Behavioral properties
  // Additional properties
}
```

### Styling

- [ ] List of styling requirements
- [ ] Theme integration points
- [ ] Customization options

### SCSS Structure

```scss
.component {
  // Base styles
  &-root {
  }

  // Variants

  // States

  // Modifiers
}
```

### Example Usage

```tsx
// Basic usage
<Component />

// With props
<Component
  prop1="value"
  prop2={value}
/>

// With children
<Component>
  Content
</Component>
```

### Design Tokens

```typescript
interface ComponentTokens {
  // Define component-specific tokens
}
```

## Technical Requirements

- [ ] TypeScript support with full type definitions
- [ ] SCSS modules implementation
- [ ] Unit tests for all features
- [ ] Storybook documentation with examples
- [ ] Theme integration
- [ ] Performance optimization

## Accessibility

- [ ] Semantic HTML elements
- [ ] ARIA attributes
- [ ] Keyboard navigation
- [ ] Screen reader support
- [ ] High contrast mode support
- [ ] RTL support

## Acceptance Criteria

1. Component renders all variants correctly
2. Proper TypeScript types are implemented
3. All props work as expected
4. Theme integration is working
5. SCSS modules are properly implemented
6. Unit tests pass
7. Storybook documentation is complete
8. Accessibility requirements are met
9. Performance is optimized

## Dependencies

- React
- TypeScript
- SCSS Modules
- Testing Library

## File Structure

```
components/
└── ComponentName/
    ├── ComponentName.tsx
    ├── ComponentName.module.scss
    ├── ComponentName.test.tsx
    ├── ComponentName.stories.tsx
    └── index.ts
```

## Additional Notes

Any additional information, considerations, or special requirements for the component.
