import React, {useState} from "react";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    productKey: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    email: "",
    confirmEmail: "",
    issueType: "",
    comments: "",
  });

  const handleChange = (e: any) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData); // Handle form submission here
  };

  return (
    <section className="flex flex-col justify-between mt-3">
      {/* Heading */}
      <div className="flex flex-col gap-1 border-bottom pb-5">
        <h2 className="p-0 m-0 flex justify-start">Contact Customer Service</h2>
        <p className="p-0 m-0 flex justify-start">
          For assistance with product activations/deactivations, licenses, grant
          numbers, support entitlements, or ServicePortal please complete this
          form.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 pt-10 form-grid"
      >
        <div className="flex flex-col gap-2 justify-start w-96">
          <label className="flex justify-start text-xs">Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter Name"
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="flex flex-col gap-2 justify-start w-96">
          <label className="flex justify-start text-xs">Company Name *</label>
          <input
            placeholder="Enter Company Name"
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="flex flex-col gap-2 justify-start w-96">
          <label className="flex justify-start text-xs">Product Key</label>
          <input
            placeholder="Enter Product Key"
            type="text"
            name="productKey"
            value={formData.productKey}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="flex flex-col gap-2 justify-start w-96">
          <label className="flex justify-start text-xs">Address</label>
          <input
            placeholder="Enter Address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="flex flex-col gap-2 justify-start w-96">
          <label className="flex justify-start text-xs">City/Town</label>
          <input
            placeholder="Enter City/Town"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="flex flex-col gap-2 justify-start w-96">
          <label className="flex justify-start text-xs">State</label>
          <input
            placeholder="Enter State"
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="flex flex-col gap-2 justify-start w-96">
          <label className="flex justify-start text-xs">Zip/Postal Code</label>
          <input
            placeholder="Enter Zip/Postal Code"
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="flex flex-col gap-2 justify-start w-96">
          <label className="flex justify-start text-xs">Phone</label>
          <input
            placeholder="Enter Phone"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="flex flex-col gap-2 justify-start w-96">
          <label className="flex justify-start text-xs">Email Address</label>
          <input
            placeholder="Enter Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="flex flex-col gap-2 justify-start w-96">
          <label className="flex justify-start text-xs">
            Confirm Email Address
          </label>
          <input
            placeholder="Enter Email Address"
            type="email"
            name="confirmEmail"
            value={formData.confirmEmail}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="flex flex-col gap-2 justify-start w-96">
          <label className="flex justify-start text-xs">Issue Type *</label>
          <select
            name="issueType"
            value={formData.issueType}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Product Activation/Deactivation">
              Product Activation/Deactivation
            </option>
            <option value="License">License</option>
            <option value="Grant Number">Grant Number</option>
            <option value="Support Entitlement">Support Entitlement</option>
            <option value="ServicePortal Password">
              ServicePortal Password
            </option>
          </select>
        </div>
        <div className="flex flex-col gap-2 justify-start w-96">
          <label className="flex justify-start text-xs">Comments</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="w-[100px] h-[40px] bg-gray-800" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Support;
