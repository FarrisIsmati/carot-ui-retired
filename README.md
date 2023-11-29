This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Chromatic Update 1

## Project documents

### How to calculate data

#### 1.

`type/VisionForm` folder contains all the types for the form itself
**If creating new form fields then you must update the types for those fields in one of the listed sections, otherwise create a new section if you need**

`type/VisionForm/common` folder contains all types of values that are repeated throughout the form and results folder

`type/VisionForm/calendar` folder contains all types for the results of the calculated form data (e.g. Calendar/Graph)

Within this folder it contains data for two things first `DayCalendar MonthCalendar YearCalendar Calendar` all of these intefaces define the shape of the massive calendar object that ends up becoming the source of truth for all data, calendar/graph.

All value types `CalenderValues` define the structure of the data that we are passing into the calendar calculation function. It takes form data, transforms it into the values we need to calculate on for the calendar function. Then turns that data into calendar data.

**If a new value must be calculated on and the data doesn't already exist, you must pass in a new value in the value section which comes from the form data. Then you must update the calendar itself if you are tracking a new metric. If you are adding a new type of data (e.g. new physical location, digitial location, staff, benefits, etc) create a new file then add the [] to company or investors.**

#### 2.

`components/VisionForm/VisionDemo/results` folder contains the graph and calendar views, as well as the code to execute the calculations for the form.

Start with `useCalendar` whose hook only updates when vision form demo redux state updates (referencing `getVisionFormDemoSelector`) after a user hit submit.

An initial calendar is generated and memoized. It is generated within range that is passed into it `startDate` and `endDate`.

**Must update the `generateInit` funcs if adding a new section (e.g. new physical location, staff, digital location, etc) then create a `genInit` func for that new section. If you're tracking a new metric to an existing section, must update that section's `genInit` func as well.**

All curve arrays generate their data memozied as well. Currently only tracking curve generation for leases specifically footTraffic, if more are needed update this function. Otherwise create more `usCalcAll___CurveDataPoints` functions and find a new way to organize them.

Investor values are generated with `useGenerateInitialInvestorsValues` then memozied before being passed into `updateCalendar`. **Note** this is memozied by length of investors, if you grant the ability to edit investor data you must remove the memo, or pop/remove the investor array everytime you edit it for changes to take effect. (Don't memozie should remove and place a todo for memoziation in future based on edit field)

Product values are generated (TODO SETUP MEMOIZATION THEN FINISH DOCUMENTATION) (setup into it's own func)

Now all of these values are the final values the calendar calculation functions are going to generate data on.
