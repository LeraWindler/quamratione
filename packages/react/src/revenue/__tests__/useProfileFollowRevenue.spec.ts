import {
  createMockApolloClientWithMultipleResponses,
  createProfileFollowRevenueMockedResponse,
  mockProfileFollowRevenueFragment,
} from '@lens-protocol/api-bindings/mocks';
import { mockProfileId } from '@lens-protocol/domain/mocks';
import { waitFor } from '@testing-library/react';

import { renderHookWithMocks } from '../../__helpers__/testing-library';
import { useProfileFollowRevenue } from '../useProfileFollowRevenue';

describe(`Given the ${useProfileFollowRevenue.name} hook`, () => {
  describe('when the query returns data successfully', () => {
    const profileId = mockProfileId();

    const mockRevenues = mockProfileFollowRevenueFragment();

    it(`should return the revenue generated by the profile's following`, async () => {
      const { result } = renderHookWithMocks(() => useProfileFollowRevenue({ profileId }), {
        mocks: {
          apolloClient: createMockApolloClientWithMultipleResponses([
            createProfileFollowRevenueMockedResponse({
              variables: { profileId },
              revenues: mockRevenues,
            }),
          ]),
        },
      });

      await waitFor(() => expect(result.current.loading).toBeFalsy());
      expect(result.current.data).toEqual(mockRevenues.revenues);
    });
  });
});
