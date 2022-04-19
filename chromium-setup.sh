#!/bin/bash


# Update apt-get: 

sudo apt-get update

# Installing dependencies: 

sudo apt-get install -y libappindicator1 fonts-liberation

# Force install all the dependencies below: 

sudo apt-get install -f
The following additional packages will be installed:
  at-spi2-core cpp cpp-7 dconf-gsettings-backend dconf-service gcc-7-base glib-networking glib-networking-common
  glib-networking-services gsettings-desktop-schemas libappindicator3-1 libasound2 libasound2-data libatk-bridge2.0-0
  libatspi2.0-0 libauthen-sasl-perl libcairo-gobject2 libcolord2 libdata-dump-perl libdbusmenu-gtk3-4 libdconf1
  libdrm-amdgpu1 libdrm-intel1 libdrm-nouveau2 libdrm-radeon1 libencode-locale-perl libepoxy0 libfile-basedir-perl
  libfile-desktopentry-perl libfile-listing-perl libfile-mimeinfo-perl libfont-afm-perl libfontenc1 libgl1
  libgl1-mesa-dri libgl1-mesa-glx libglapi-mesa libglvnd0 libglx-mesa0 libglx0 libgtk-3-0 libgtk-3-bin libgtk-3-common
  libhtml-form-perl libhtml-format-perl libhtml-parser-perl libhtml-tagset-perl libhtml-tree-perl libhttp-cookies-perl
  libhttp-daemon-perl libhttp-date-perl libhttp-message-perl libhttp-negotiate-perl libice6 libindicator3-7
  libio-html-perl libio-socket-ssl-perl libipc-system-simple-perl libisl19 libjson-glib-1.0-0 libjson-glib-1.0-common
  liblcms2-2 libllvm9 liblwp-mediatypes-perl liblwp-protocol-https-perl libmailtools-perl libmpc3 libnet-dbus-perl
  libnet-http-perl libnet-smtp-ssl-perl libnet-ssleay-perl libnspr4 libnss3 libpciaccess0 libproxy1v5 librest-0.7-0
  libsensors4 libsm6 libsoup-gnome2.4-1 libsoup2.4-1 libtie-ixhash-perl libtimedate-perl libtry-tiny-perl liburi-perl
  libwayland-client0 libwayland-cursor0 libwayland-egl1 libwww-perl libwww-robotrules-perl libx11-protocol-perl
  libx11-xcb1 libxaw7 libxcb-dri2-0 libxcb-dri3-0 libxcb-glx0 libxcb-present0 libxcb-shape0 libxcb-sync1 libxft2
  libxkbcommon0 libxml-parser-perl libxml-twig-perl libxml-xpathengine-perl libxmu6 libxpm4 libxshmfence1 libxss1 libxt6
  libxtst6 libxv1 libxxf86dga1 libxxf86vm1 perl-openssl-defaults x11-common x11-utils x11-xserver-utils xdg-utils
Suggested packages:
  cpp-doc gcc-7-locales indicator-application libasound2-plugins alsa-utils libdigest-hmac-perl libgssapi-perl colord
  gvfs liblcms2-utils libcrypt-ssleay-perl lm-sensors libauthen-ntlm-perl libunicode-map8-perl libunicode-string-perl
  xml-twig-tools mesa-utils nickle cairo-5c xorg-docs-core
The following NEW packages will be installed:
  at-spi2-core cpp cpp-7 dconf-gsettings-backend dconf-service gcc-7-base glib-networking glib-networking-common
  glib-networking-services gsettings-desktop-schemas libappindicator3-1 libasound2 libasound2-data libatk-bridge2.0-0
  libatspi2.0-0 libauthen-sasl-perl libcairo-gobject2 libcolord2 libdata-dump-perl libdbusmenu-gtk3-4 libdconf1
  libdrm-amdgpu1 libdrm-intel1 libdrm-nouveau2 libdrm-radeon1 libencode-locale-perl libepoxy0 libfile-basedir-perl
  libfile-desktopentry-perl libfile-listing-perl libfile-mimeinfo-perl libfont-afm-perl libfontenc1 libgl1
  libgl1-mesa-dri libgl1-mesa-glx libglapi-mesa libglvnd0 libglx-mesa0 libglx0 libgtk-3-0 libgtk-3-bin libgtk-3-common
  libhtml-form-perl libhtml-format-perl libhtml-parser-perl libhtml-tagset-perl libhtml-tree-perl libhttp-cookies-perl
  libhttp-daemon-perl libhttp-date-perl libhttp-message-perl libhttp-negotiate-perl libice6 libindicator3-7
  libio-html-perl libio-socket-ssl-perl libipc-system-simple-perl libisl19 libjson-glib-1.0-0 libjson-glib-1.0-common
  liblcms2-2 libllvm9 liblwp-mediatypes-perl liblwp-protocol-https-perl libmailtools-perl libmpc3 libnet-dbus-perl
  libnet-http-perl libnet-smtp-ssl-perl libnet-ssleay-perl libnspr4 libnss3 libpciaccess0 libproxy1v5 librest-0.7-0
  libsensors4 libsm6 libsoup-gnome2.4-1 libsoup2.4-1 libtie-ixhash-perl libtimedate-perl libtry-tiny-perl liburi-perl
  libwayland-client0 libwayland-cursor0 libwayland-egl1 libwww-perl libwww-robotrules-perl libx11-protocol-perl
  libx11-xcb1 libxaw7 libxcb-dri2-0 libxcb-dri3-0 libxcb-glx0 libxcb-present0 libxcb-shape0 libxcb-sync1 libxft2
  libxkbcommon0 libxml-parser-perl libxml-twig-perl libxml-xpathengine-perl libxmu6 libxpm4 libxshmfence1 libxss1 libxt6
  libxtst6 libxv1 libxxf86dga1 libxxf86vm1 perl-openssl-defaults x11-common x11-utils x11-xserver-utils xdg-utils
  
# Download Chrome: 

wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb

# Install Chrome: 

sudo dpkg -i google-chrome*.deb

clear 

# If it is okay, show version: 
echo "Google Chrome has been installed with success ! [SUCCESS - EXIT 0]"

# Google Chrom Version: 
google-chrome-stable -version
