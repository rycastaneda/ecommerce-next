'use client'

import { useEffect } from "react";

export default function ProductPage() {
    
    useEffect(() => {

        console.log('asd');
    }, [])
    return (
      <>
        <h1>Verify page etst</h1>
        <p>
          This page is intended to verify that Redux state is persisted across
          page navigations.
        </p>
      </>
    )
  }
  