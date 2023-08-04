import { MemoryRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Err404 from '@/renderer/pages/Err404';

import NavLayout from '@/renderer/components/layout/NavLayout';
import Home from '@/renderer/pages/Home';

import FileRename from './pages/FileRename';

const App: React.FunctionComponent = () => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<NavLayout />}>
          <Route index element={<Home />} />
          <Route path="fileRename" element={<FileRename />} />
        </Route>
        <Route path="*" element={<Err404 />} />
      </Routes>
    </MemoryRouter>
  </>
);

export default App;
