import React from "react";
import Toggle from "../toggleBtn";

export const DashboardData: React.FC = (): JSX.Element => {
  const [on, setOnState] = React.useState(false);
  const toggle = () => setOnState((o) => !o);

  const fields = [
    {label: "Disabled CMD", stateKey: "usbDeviceEnabled"},
    {
      label: "Restricted installation of unsigned device drivers",
      stateKey: "bluetoothDeviceEnabled",
    },
    {
      label: "Restricted mass storage device access",
      stateKey: "bluetoothDeviceEnabled",
    },
    {
      label: "Prevent Changes in Virus & Threat protection",
      stateKey: "bluetoothDeviceEnabled",
    },
    {
      label: "Disable Guest Account",
      stateKey: "bluetoothDeviceEnabled",
    },
    {
      label: "Do not allow enumeration of SAM accounts and shares",
      stateKey: "bluetoothDeviceEnabled",
    },
    {
      label: "Disabled regedit.exe",
      stateKey: "bluetoothDeviceEnabled",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="flex justify-between items-center p-0">
        <h3>DEVICE RESTRICTIONS</h3>
        <div className="h-12 flex gap-5 justify-center items-center">
          <button className="bg-green-400 w-[120px] h-[35px] flex items-center justify-center">
            Allow All
          </button>
          <button className="bg-red-400 w-[120px] h-[35px] flex items-center justify-center">
            {" "}
            Deny All
          </button>
        </div>
      </section>
      <span className="w-screen border-[0.1px] border-solid border-[#ffffffde]" />

      <section className="pt-10 flex flex-col gap-5 w-full">
        {fields.map((item, idx) => (
          <div className="flex justify-between" key={idx}>
            <h4 className="p-0 m-0">{item.label}</h4>
            <Toggle toggle={on} handleToggleChange={toggle} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default DashboardData;
