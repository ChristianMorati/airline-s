import Pricing from '@/components/ui/Pricing/Pricing';
import {
  getProducts,
  getSubscription,
  getUser
} from '@/utils/supabase/queries';
import { LandingPage } from '@/components/LandingPage/LandingPage';
import { createClient } from '@/utils/supabase/server';

export default async function PricingPage() {
  const supabase = createClient();
  const [user, products, subscription] = await Promise.all([
    getUser(supabase),
    getProducts(supabase),
    getSubscription(supabase)
  ]);

  return (
    <>
      <div
        className="
        flex flex-col
        divide-y-[1px]
        divide-zinc-900
      ">
        <>
          <h1>YOUR user ID</h1>
          {user?.id}
        </>
        {
          subscription && (
            <>
              <h1>YOUR SUB ID</h1>
              {subscription.id}
            </>
          )
        }
        <LandingPage />

        <Pricing
          user={user}
          products={products ?? []}
          subscription={subscription}
        />
      </div>
    </>
  );
}
