export default function TermsPage() {
  return (
    <section className="pb-24 pt-16">
      <div className="container">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-0 py-12 md:py-20">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-4">
                Cancellation & Refund Policy
              </h1>
              <p className="text-muted-foreground mt-2 text-lg md:text-xl leading-relaxed">
                {`Last updated on 27-09-2024 19:36:58 .`}
              </p>
            </div>
            <div className="space-y-1">
              <p>
                {`SAKAT AZIZ KHAN believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:`}
              </p>

              <ul className="list-disc">
                <li>
                  {`Cancellations will be considered only if the request is made
                  immediately after placing the order. However, the cancellation
                  request may not be entertained if the orders have been
                  communicated to the vendors/merchants and they have initiated
                  the process of shipping them.`}
                </li>
                <li>
                  {` SAKAT AZIZ KHAN does not accept cancellation requests for
                  perishable items like flowers, eatables, etc. However,
                  refund/replacement can be made if the customer establishes
                  that the quality of the product delivered is not good.`}
                </li>
                <li>
                  {` In case of receipt of damaged or defective items, please
                  report the same to our Customer Service team. The request
                  will, however, be entertained once the merchant has checked
                  and determined the same at his own end. This should be
                  reported within 7 Days of receipt of the products. In case you
                  feel that the product received is not as shown on the site or
                  as per your expectations, you must bring it to the notice of
                  our customer service within 7 Days of receiving the product.
                  The Customer Service Team, after looking into your complaint,
                  will take an appropriate decision.`}
                </li>
                <li>
                  {` In case of complaints regarding products that come with a
                  warranty from manufacturers, please refer the issue to them.
                  In case of any Refunds approved by the SAKAT AZIZ KHAN, it’ll
                  take 3-5 Days for the refund to be processed to the end
                  customer.`}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
