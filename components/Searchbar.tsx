"use client";
import React, { FormEvent, useState } from "react";

const isValidAmazonProductLink = (url: string) => {
  try {
    const parsedUrl = new URL(url);
    const hostname = parsedUrl.hostname;

    // Check if the hostname contains amazon.com or something else
    if (
      hostname.includes("amazon.com") ||
      hostname.includes("amazon.") ||
      hostname.endsWith("amazon")
    ) {
      return true;
    }
  } catch (error) {
    console.log("Not a Valid Amazon Link");
    return false;
  }
};

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isloading, setIsLoading] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazonProductLink(searchPrompt);
    // alert(isValidLink ? "Valid Link" : "Invalid Link");
    if (!isValidLink) {
      return alert("Please provide a valid Amazon Product Link");
    }

    try {
      setIsLoading(true);

      //? here contains all the logic to scrap the information for product links
      //* Scrap the Product Page
    } catch (error) {
      console.log("Error occured in the handleSubmit in Searchbar.jsx");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 mt-12">
      <input
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder="Enter product link"
        className="searchbar-input"
      />
      <button
        type="submit"
        disabled={searchPrompt === ""}
        className="searchbar-btn"
      >
        {isloading ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

export default Searchbar;
