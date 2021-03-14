const IconsCollection = () => (
    <svg
        style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <symbol id="icon-twitter" viewBox="0 0 32 32">
                <path d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"></path>
            </symbol>
            <symbol id="icon-google" viewBox="0 0 20 20">
                <path d="M1.989 5.589c0 1.494 0.499 2.572 1.482 3.205 0.806 0.52 1.74 0.598 2.226 0.598 0.118 0 0.213-0.006 0.279-0.010 0 0-0.154 1.004 0.59 1.996h-0.034c-1.289 0-5.493 0.269-5.493 3.727 0 3.516 3.861 3.695 4.636 3.695 0.061 0 0.097-0.002 0.097-0.002 0.008 0 0.063 0.002 0.158 0.002 0.497 0 1.782-0.062 2.975-0.643 1.548-0.75 2.333-2.059 2.333-3.885 0-1.764-1.196-2.814-2.069-3.582-0.533-0.469-0.994-0.873-0.994-1.266 0-0.4 0.337-0.701 0.762-1.082 0.689-0.615 1.339-1.492 1.339-3.15 0-1.457-0.189-2.436-1.354-3.057 0.121-0.062 0.551-0.107 0.763-0.137 0.631-0.086 1.554-0.184 1.554-0.699v-0.099h-4.599c-0.046 0.002-4.651 0.172-4.651 4.389zM9.413 14.602c0.088 1.406-1.115 2.443-2.922 2.574-1.835 0.135-3.345-0.691-3.433-2.096-0.043-0.676 0.254-1.336 0.835-1.863 0.589-0.533 1.398-0.863 2.278-0.928 0.104-0.006 0.207-0.012 0.31-0.012 1.699 0.001 2.849 0.999 2.932 2.325zM8.212 4.626c0.451 1.588-0.23 3.246-1.316 3.553-0.125 0.035-0.253 0.052-0.384 0.052-0.994 0-1.979-1.006-2.345-2.393-0.204-0.776-0.187-1.458 0.047-2.112 0.229-0.645 0.643-1.078 1.163-1.225 0.125-0.035 0.254-0.053 0.385-0.053 1.2 0 1.972 0.498 2.45 2.178zM16 8v-3h-2v3h-3v2h3v3h2v-3h3v-2h-3z" />
            </symbol>
            <symbol id="icon-facebook" viewBox="0 0 32 32">
                <path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path>
            </symbol>
            <symbol id="icon-linkedin" viewBox="0 0 32 32">
                <path d="M12 12h5.535v2.837h0.079c0.77-1.381 2.655-2.837 5.464-2.837 5.842 0 6.922 3.637 6.922 8.367v9.633h-5.769v-8.54c0-2.037-0.042-4.657-3.001-4.657-3.005 0-3.463 2.218-3.463 4.509v8.688h-5.767v-18z"></path>
                <path d="M2 12h6v18h-6v-18z"></path>
                <path d="M8 7c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
            </symbol>
            <symbol id="icon-location" viewBox="0 0 24 24">
                <path d="M12 5c1.609 0 3.12 0.614 4.254 1.73 1.126 1.107 1.746 2.579 1.746 4.14s-0.62 3.030-1.745 4.139l-4.255 4.184-4.254-4.186c-1.125-1.107-1.745-2.576-1.745-4.139s0.62-3.032 1.745-4.141c1.135-1.113 2.647-1.727 4.254-1.727zM12 3c-2.047 0-4.096 0.768-5.657 2.305-3.124 3.074-3.124 8.057 0 11.131l5.657 5.563 5.657-5.565c3.124-3.072 3.124-8.056 0-11.129-1.561-1.537-3.609-2.305-5.657-2.305z"></path>
                <path d="M12 8.499c0.668 0 1.296 0.26 1.768 0.731 0.976 0.976 0.976 2.562 0 3.537-0.473 0.472-1.1 0.731-1.768 0.731s-1.295-0.26-1.768-0.731c-0.976-0.976-0.976-2.562 0-3.537 0.473-0.471 1.101-0.731 1.768-0.731zM12 7.499c-0.896 0-1.792 0.342-2.475 1.024-1.367 1.367-1.367 3.584 0 4.951 0.684 0.684 1.578 1.024 2.475 1.024s1.792-0.342 2.475-1.024c1.366-1.367 1.366-3.584 0-4.951-0.683-0.683-1.579-1.024-2.475-1.024z"></path>
            </symbol>
            <symbol id="icon-people-connected" viewBox="0 0 32 32">
                <path d="M4.5 18.5h1v1h-1z" />
                <path d="M6.5 18.5h1v1h-1z" />
                <path d="M14.5 6h1v1h-1z" />
                <path d="M16.5 6h1v1h-1z" />
                <path d="M24.5 18.5h1v1h-1z" />
                <path d="M26.5 18.5h1v1h-1z" />
                <path d="M10.7 22.696l0.706 0.709c1.176-1.177 2.802-1.905 4.597-1.905s3.421 0.728 4.597 1.905v0l0.706-0.709c-1.357-1.357-3.232-2.196-5.302-2.196s-3.945 0.839-5.303 2.196l0-0z" />
                <path d="M12.111 24.111l0.707 0.707c0.814-0.814 1.939-1.318 3.181-1.318s2.367 0.503 3.181 1.318v0l0.707-0.707c-0.995-0.996-2.37-1.612-3.889-1.612s-2.894 0.616-3.888 1.612l-0 0z" />
                <path d="M13.524 25.528l0.71 0.704c0.451-0.452 1.076-0.732 1.765-0.732s1.314 0.28 1.765 0.732l0 0 0.71-0.704c-0.633-0.635-1.508-1.028-2.475-1.028s-1.842 0.393-2.475 1.027l-0 0z" />
                <path d="M16 26.5c-0.828 0-1.5 0.672-1.5 1.5s0.672 1.5 1.5 1.5c0.828 0 1.5-0.672 1.5-1.5v0c0-0.828-0.672-1.5-1.5-1.5v0zM16 28.5c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5c0.276 0 0.5 0.224 0.5 0.5v0c0 0.276-0.224 0.5-0.5 0.5v0z" />
                <path d="M11 17.5v-0.5c-0.002-1.932-1.568-3.498-3.5-3.5h-3c-1.932 0.002-3.498 1.568-3.5 3.5v0.5c0.001 0.138 0.056 0.263 0.145 0.355l-0-0 0.665 0.665c-0.464 0.092-0.809 0.496-0.81 0.98v0.5c0.002 0.552 0.448 0.998 1 1h0.54c0.146 0.986 0.685 1.823 1.449 2.363l0.011 0.007v1.38l-1.8 1.35c-0.122 0.092-0.2 0.236-0.2 0.399 0 0.043 0.006 0.085 0.016 0.125l-0.001-0.003 1 4c0.056 0.22 0.252 0.38 0.485 0.38h5c0.233-0 0.429-0.16 0.484-0.377l0.001-0.003 1-4c0.010-0.036 0.015-0.078 0.015-0.121 0-0.163-0.078-0.307-0.199-0.398l-0.001-0.001-1.8-1.35v-1.38c0.775-0.547 1.314-1.384 1.458-2.351l0.002-0.019h0.54c0.552-0.002 0.998-0.448 1-1v-0.5c-0.001-0.484-0.346-0.888-0.804-0.979l-0.006-0.001 0.665-0.665c0.089-0.092 0.144-0.217 0.145-0.355v-0zM2.5 20h-0.5v-0.5h0.5zM8.935 26.7l-0.825 3.3h-4.22l-0.825-3.3 1.735-1.3c0.121-0.093 0.199-0.237 0.2-0.4v-1.145c0.299 0.092 0.643 0.145 1 0.145s0.701-0.053 1.025-0.151l-0.025 0.006v1.145c0.001 0.163 0.079 0.307 0.199 0.399l0.001 0.001zM8.5 20.5c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5v0-2.69l1.56-0.78 3.44 0.86zM10 20h-0.5v-0.5h0.5zM10 17.295l-0.5 0.5v-0.295c-0-0.233-0.16-0.429-0.377-0.484l-0.003-0.001-4-1c-0.036-0.009-0.077-0.015-0.12-0.015-0.082 0-0.16 0.020-0.228 0.056l0.003-0.001-2 1c-0.164 0.081-0.275 0.247-0.275 0.439 0 0.002 0 0.004 0 0.006v-0 0.295l-0.5-0.5v-0.295c0-1.381 1.119-2.5 2.5-2.5v0h3c1.381 0 2.5 1.119 2.5 2.5v0z" />
                <path d="M31 17.5v-0.5c-0.002-1.932-1.568-3.498-3.5-3.5h-3c-1.932 0.002-3.498 1.568-3.5 3.5v0.5c0.001 0.138 0.056 0.263 0.145 0.355l-0-0 0.665 0.665c-0.464 0.092-0.809 0.496-0.81 0.98v0.5c0.002 0.552 0.448 0.998 1 1h0.54c0.146 0.986 0.685 1.823 1.449 2.363l0.011 0.007v1.38l-1.8 1.35c-0.122 0.092-0.2 0.236-0.2 0.399 0 0.043 0.006 0.085 0.016 0.125l-0.001-0.003 1 4c0.056 0.22 0.252 0.38 0.485 0.38h5c0.233-0 0.429-0.16 0.484-0.377l0.001-0.003 1-4c0.010-0.036 0.015-0.078 0.015-0.121 0-0.163-0.078-0.307-0.199-0.398l-0.001-0.001-1.8-1.35v-1.38c0.775-0.547 1.314-1.384 1.458-2.351l0.002-0.019h0.54c0.552-0.002 0.998-0.448 1-1v-0.5c-0.001-0.484-0.346-0.888-0.804-0.979l-0.006-0.001 0.665-0.665c0.089-0.092 0.144-0.217 0.145-0.355v-0zM22.5 20h-0.5v-0.5h0.5zM28.935 26.7l-0.825 3.3h-4.22l-0.825-3.3 1.735-1.3c0.121-0.093 0.199-0.237 0.2-0.4v-1.145c0.299 0.092 0.643 0.145 1 0.145s0.701-0.053 1.025-0.151l-0.025 0.006v1.145c0.001 0.163 0.079 0.307 0.199 0.399l0.001 0.001zM28.5 20.5c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5v0-2.69l1.56-0.78 3.44 0.86zM30 20h-0.5v-0.5h0.5zM30 17.295l-0.5 0.5v-0.295c-0-0.233-0.16-0.429-0.377-0.484l-0.003-0.001-4-1c-0.036-0.009-0.077-0.015-0.12-0.015-0.082 0-0.16 0.020-0.228 0.056l0.003-0.001-2 1c-0.164 0.081-0.275 0.247-0.275 0.439 0 0.002 0 0.004 0 0.006v-0 0.295l-0.5-0.5v-0.295c0-1.381 1.119-2.5 2.5-2.5v0h3c1.381 0 2.5 1.119 2.5 2.5v0z" />
                <path d="M21 5v-0.5c-0.002-1.932-1.568-3.498-3.5-3.5h-3c-1.932 0.002-3.498 1.568-3.5 3.5v0.5c0.001 0.138 0.056 0.263 0.145 0.355l-0-0 0.665 0.665c-0.464 0.092-0.809 0.496-0.81 0.98v0.5c0.002 0.552 0.448 0.998 1 1h0.54c0.146 0.986 0.685 1.823 1.449 2.363l0.011 0.007v1.38l-1.8 1.35c-0.122 0.092-0.2 0.236-0.2 0.399 0 0.043 0.005 0.085 0.016 0.125l-0.001-0.003 1 4c0.056 0.22 0.252 0.38 0.485 0.38h5c0.233-0 0.429-0.16 0.484-0.377l0.001-0.003 1-4c0.010-0.036 0.015-0.078 0.015-0.121 0-0.163-0.078-0.307-0.199-0.398l-0.001-0.001-1.8-1.35v-1.38c0.775-0.547 1.314-1.384 1.458-2.351l0.002-0.019h0.54c0.552-0.002 0.998-0.448 1-1v-0.5c-0.001-0.484-0.346-0.888-0.804-0.979l-0.006-0.001 0.665-0.665c0.089-0.092 0.144-0.217 0.145-0.355v-0zM12.5 7.5h-0.5v-0.5h0.5zM18.935 14.2l-0.825 3.3h-4.22l-0.825-3.3 1.735-1.3c0.121-0.093 0.199-0.237 0.2-0.4v-1.145c0.299 0.092 0.643 0.145 1 0.145s0.701-0.053 1.025-0.152l-0.025 0.007v1.145c0.001 0.163 0.079 0.307 0.199 0.399l0.001 0.001zM18.5 8c0 1.381-1.119 2.5-2.5 2.5s-2.5-1.119-2.5-2.5v0-2.69l1.56-0.78 3.44 0.86zM20 7.5h-0.5v-0.5h0.5zM20 4.795l-0.5 0.5v-0.295c-0-0.233-0.16-0.429-0.377-0.484l-0.003-0.001-4-1c-0.036-0.009-0.077-0.015-0.12-0.015-0.082 0-0.16 0.020-0.228 0.056l0.003-0.001-2 1c-0.164 0.081-0.275 0.247-0.275 0.439 0 0.002 0 0.004 0 0.006v-0 0.295l-0.5-0.5v-0.295c0-1.381 1.119-2.5 2.5-2.5v0h3c1.381 0 2.5 1.119 2.5 2.5v0z" />
            </symbol>
        </defs>
    </svg>
);

export default IconsCollection;