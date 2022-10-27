import { SearchableDropdownResultItem, SearchableDropdownResult } from '@equinor/fusion-wc-searchable-dropdown';

/* generates a single SearchableDropdownResult item with required propterties  */
const singleItem = (props: unknown): SearchableDropdownResultItem => {
  return Object.assign({ id: '0', title: 'Dummy title' }, props);
};

/**
 * Example api handler
 * Takes the query string to search for and return matching example projects.
 * Query string min length to start "http request" is 3 chars.
 * uses singleItem() to create a single result with errors or other information
 */
const fakeApi = (query: string): SearchableDropdownResult => {
  /* min length */
  const min = 3;
  const items = [];
  if (!query || query.length < min) {
    items.push(singleItem({ title: `Add ${min - query.length} chars to search`, isDisabled: true }));
    return items;
  }
  const allResults = [
    {
      id: '0001',
      title: 'Johan Castberg',
      isError: true,
      meta: 'error_outlined',
    },
    {
      id: '0002',
      title: 'Johan Sverdrup Business Case',
      subTitle: 'some project description...',
      isSelected: true,
      meta: 'check',
    },
    {
      id: '0003',
      title: 'Johan Sverdrup Phase 2',
    },
    {
      id: '0004',
      title: 'Johan Castberg Prosjektportal',
    },
  ];

  for (const item of allResults) {
    if (item.title.toLowerCase().indexOf(query) > -1) {
      items.push(item);
    }
  }

  if (!items.length) {
    items.push(singleItem({ title: 'No matches...', isDisabled: true }));
  }

  return items;
};

/* Example resolver for lit controller task */
export const _exampleResolver = {
  searchQuery: async (query: string) => {
    try {
      return fakeApi(query);
    } catch (e) {
      return [singleItem({ item: 'API Error', subTitle: e, isDisabled: true, isError: true })];
    }
  },
};

/* Listen to action event */
export const _handleAction = (e: Event) => {
  /* no need to bubble further up the dom */
  e.stopPropagation();
  console.log('Event', e.type, 'fired. Object:', e);
};
