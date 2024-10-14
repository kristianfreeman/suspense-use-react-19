# React `use` API Example

Example showing the `use` API included in React 19, in combination with `React.Suspense` and error boundaries.

## Installation

The `package.json` configuration is slightly messed up because of dependencies with React 19. You may install using `npm install --force`._

## How it works

_Note that these code snippets are condensed for clarity._

Repositories are loaded from an external API in the `Repos` component. In the parent `App` component, a top-level `view` state is managed for switching between "daily", "weekly" and "monthly" views:

```tsx
const Error = <div className="flex gap-2">
  <CircleX className="text-red-500" /> Something went wrong
</div>

const Loader = <div className="flex gap-2">
  <LoaderIcon className="animate-spin" /> Loading...
</div>

function App() {
  const [view, setView] = useState<ViewOption>('daily')

  return (
    <div className="flex flex-col items-center gap-8">
      <Menu setView={setView} view={view} />
      <ErrorBoundary fallback={Error}>
        <Suspense fallback={Loader}>
          <Repos view={view} />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}
```

In the `Repos` component, the `use` hook is used to load the repositories:

```tsx
const Repos = ({ view: view }: { view: ViewOption }) => {
  // getRepos is an async function that calls fetch and
  // returns a promise, resolving to an array of repos
  const repos = use(getRepos(view))

  // HTML rendering code below
}
```

That's all you need to do to use the `use` hook in a component. The following characteristics automatically occur due to the `use` API implementation:
- If any aspect of the data loading fails, the `ErrorBoundary` component will catch the error and render the fallback UI.
- If the data loading is still in progress, the `Suspense` component will render the `Loader` UI.
- If the data loading is successful, the `Suspense` component will render the `Repos` component.

