import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Container } from "./container";
import CSS from 'csstype';

const recapLogoStyle: CSS.Properties = {
  position: 'relative',
  width: '125px',
}

export const Navigation = () => {
  const router = useRouter();

  const aYearofFramedStyle: CSS.Properties = {
    fontWeight: 'bold',
    //textAlign: 'center',
    fontSize: '20px',
    opacity: '90%',
  };

  return (
    <nav className="w-full fixed top-0 py-3 bg-black/30 backdrop-blur-lg border-b border-b-white/10 shadow-md text-white z-50">
      <Container>
        <ul className="flex items-center">
          <li>
            <Link
              href="https://framedsc.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-8 h-8 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  viewBox="0 0 2048 2048"
                  fill="#9A9A9A"
                >
                  <g>
                    <g>
                      <path d="M892.3,688v242h539v247.2h-539v411.9H609.1v-1150h889.1V688H892.3z"></path>
                    </g>
                  </g>
                  <path d="M143.6,138.5v1760.9h1760.9V138.5H143.6z M1783.8,1778.7H264.2V259.2h1519.6V1778.7z"></path>
                </svg>
              </div>
            </Link>
          </li>
          <Link
            href="/framed-wrapped/"
            style ={ aYearofFramedStyle }
          >
            <img src="recap-nsub-logo.svg" style={ recapLogoStyle }/>
          </Link>
        </ul>
      </Container>
    </nav>
  );
};
