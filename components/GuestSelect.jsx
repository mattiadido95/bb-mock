import * as React from "react";
import {
  Select,
  SelectGroup,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "./ui/select";

const GuestSelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="how many guests?" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Guests</SelectLabel>
          <SelectItem value="1">1 guest</SelectItem>
          <SelectItem value="2">2 guests</SelectItem>
          <SelectItem value="3">3 guests</SelectItem>
          <SelectItem value="4">4 guests</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default GuestSelect;
