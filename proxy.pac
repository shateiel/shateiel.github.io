function FindProxyForURL(url, host)
{
     if (isInNet(host, "192.168.1.0", "255.255.255.0"))
        return "DIRECT";
     return "proxy 192.168.1.20:1081";
}
