const FAQ = () => {
  return (
    <div>
      <h3 className="font-black text-3xl text-purple-500 text-center mb-6">
        Frequently Asked Questions
      </h3>
      <div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold">
            Can I add same product twice in my cart?
          </div>
          <div className="collapse-content text-sm">
            At this point you can not add more than one same product at the same
            time for our policy matters.Hence you can buy the same product after
            purchasing it once
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            How much is the delivery charge?
          </div>
          <div className="collapse-content text-sm">
            We are glad to announce that we are not charging for the delivery at
            this moment. But in near future we will update our delivery policy.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            What are the key features of your company?
          </div>
          <div className="collapse-content text-sm">
            Our key features are customer based. Our main focuses are to impress
            customers. We believe in quality customer service.
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            How long does it usually take to deliver products?
          </div>
          <div className="collapse-content text-sm">
            Usually it takes 3-4 days. But most of the time you will get
            delivered within the same day you ordered, if you order in the
            morning time.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
