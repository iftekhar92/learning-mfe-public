import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { mount } from "marketing/MarketingApp";

export default ({ basename }) => {
  const [ref, setRef] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  const onRefChange = useCallback((node) => {
    setRef(node);
  }, []);

  useEffect(() => {
    mount(ref, {
      basename,
      location,
      onNavigate: ({ pathname }) => {
        navigate(pathname);
      },
    });
  }, [ref, basename, location, navigate]);

  return <div ref={onRefChange}></div>;
};
