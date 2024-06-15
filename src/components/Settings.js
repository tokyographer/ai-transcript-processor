// src/components/Settings.js

import React from 'react';
import { Card, Label, TextInput, Button } from 'flowbite-react';

const Settings = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>
      <Card>
        <form className="space-y-4">
          <div>
            <Label htmlFor="username" value="Username" />
            <TextInput id="username" type="text" placeholder="Enter your username" required={true} />
          </div>
          <div>
            <Label htmlFor="email" value="Email" />
            <TextInput id="email" type="email" placeholder="Enter your email" required={true} />
          </div>
          <div>
            <Label htmlFor="password" value="Password" />
            <TextInput id="password" type="password" placeholder="Enter a new password" required={true} />
          </div>
          <Button type="submit">
            Save Settings
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default Settings;
