# Agent Guidelines

This repository is collaborative. Make focused changes, preserve existing user work, and prefer the smallest safe edit that solves the request.

## Working Practices

## Network Access

- For shell commands that require network access, prefix the command with `proxychains4` so traffic is routed through the proxy.
- If you are asked for the current IP address, use:

```bash
proxychains4 curl ifconfig.me
```
