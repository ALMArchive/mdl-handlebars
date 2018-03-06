**THIS PROJECT IS DEPRECATED, IF YOU WANT TO TAKE OVER THE PROJECT MESSAGE ALMACLAINE**

# mdl-handlebars
MDL Handlebars is a set of handlebars.js partials and helpers that creates a
component library for Material Design Lite.

## CONTRIBUTING

I am very eager to find someone who is interested in this idea and wants to work
with me on developing it out fully.

## Installing
`npm install mdl-handlebars`

## API

### Components

#### mdl-layout

Block: True

Description: Returns a mdl-layout div with appropriate options based on hashes.

Hashes: id, class, drawer-fixed (boolean), header-fixed (boolean),
tabs-fixed (boolean), no-button (boolean), no-desktop (boolean).

#### mdl-layout-title

Block: False

Description: Returns a mdl-layout__title span with appropriate options based on
hashes.

Hashes: id, class, title, spacer (boolean)

#### mdl-layout-content

Block: True

Description: Returns a mdl-layout__content main with appropriate options based
on hashes.

Hashes: id, class

#### mdl-layout-grid

Block: True

Description: Returns a mdl-grid div with appropriate options based on hashes.

Hashes: id, class, no-spacing (boolean)

#### mdl-layout-cell

Block: True

Description: Returns a mdl-cell div with appropriate options based on hashes.

Hashes: id, class, ncol-phone, ncol-tablet, ncol-desktop, ncol, offset-phone,
offset-tablet, offset-desktop, offset, order-phone, order-tablet, order-desktop,
order, no-tablet (boolean), no-phone (boolean), stretch (boolean),
pos ("top", "middle", "bottom")

#### mdl-layout-icon

Block: True

Description: Returns a material-icons i with icon type being set by block value.

Hashes: id, class

#### mdl-header

Block: True

Description: Returns a mdl-layout__header header with approrpiate options based
on hashes.

Hashes: id, class, scroll (boolean), waterfall (boolean),
waterfall-hide (boolean, must have waterfall set as true), transparent (boolean)
, seamed (boolean), screen-large (boolean), screen-small (boolean)

#### mdl-header-row

Block: True

Description: Returns a mdl-layout__header-row div with appropriate options based
on hashes.

Hashes: id, class

#### mdl-textfield

Block: True

Description: Returns a mdl-textfield div with appropriate options based on
hashes.

Hashes: id, class, label-float (boolean), expand (boolean), invalid (boolean)

#### mdl-textfield-holder

Block: True

Description: Returns a mdl-textfield__expandable-holder div with options based
on hashes.

Hashes: id, class

#### mdl-textfield-label

Block: True

Description: Returns a mdl-textfield-label label with appropriate options based
on hashes.

Hashes: id, class, for

#### mdl-textfield-input

Block: False

Description: Returns a mdl-textfield_input input or text area with appropriate
options based on hashes.

Hashes: id, class, textarea (boolean), rows, pattern

#### mdl-textfield-error

Block: False

Description: Returns a mdl-textfield__error span with appropriate options based
on hashes.

Hashes: id, class

#### mdl-button

Block: True

Description: Returns a mdl-button label with appropriate options based on
hashes.

Hashes: id, class, for, icon

#### mdl-footer-mini

Block: True

Description: Returns a mdl-mini-footer footer with appropriate
options based on hashes.

Hashes: id, class

#### mdl-footer-mini-left

Block: True

Description: Returns a mdl-mini-footer__left-section div with appropriate
options based on hashes.

Hashes: id, class

#### mdl-footer-mini-links

Block: True

Description: Returns a mdl-mini-footer__link-list ul with appropriate
options based on hashes.

Hashes: id, class

#### droid-icon

Block: False

Description: Returns a meta and link tag for creating an android icon, used
in head.

Hashes: icon

#### head-main

Block: False

Description: Returns basic meta, link and title tags needed inside head.

Hashes: desc, icon, title

#### ie-compat

Block: False

Description: Returns older version of i.e. compatability meta tag.

#### ios-icon

Block: False

Description: Returns a meta and link tag for creating an ios icon, used
in head.

Hashes: color, title, icon

#### win8-icon

Block: False

Description: Returns a meta and link tag for creating a win8 icon, used
in head.

Hashes: color, icon

### Helpers

#### both

Function Header: `function(cond1, cond2, val1, val2)`

Description: If cond1 and cond2 exist and are not false, return val1, otherwise return val2

Example: `{{both cond1 cond2 val1 val2}}`

#### cat

Function Header: `function(...var_args)`

Description: Takes any number of arguments and concatenates them together.

Example: `{{cat "Put" "All" "These" "Together"}}`

#### clamp

Function Header: `function(val)`

Hashes: min & max

Description: Takes a value and two hashes, min and max, clamps the value between
the min and max.

Example: `{{clamp 2 min="1" max="4"}}`

#### link-styles

Function Header: `function()`

Hashes: hrefs

Description: Takes a hash called hrefs, which is a string encoded array of urls
to create style links to.

Example: `{{{link-styles hrefs='["url1", "url2", "url3"]'}}}`

#### switch

Function Header: `function(val, cases)`

Description: Takes a value and a string encoded object of cases to outputs. A
default value can be added using the 'default' key.

Example: `{{switch case1 '{"case1": "Val1", "case2": "Val2", "default": "The default"} }}

#### tern

Function Header: `function(cond, val1, val2)`

Description: Takes a condition, and two values. If the condition exists and is
not false, val1 is returned, otherwise val2.

Example: `{{tern val1 "Return 1" "Return 2" }}`
