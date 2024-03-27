import React, { memo } from 'react';

import { Block, Container } from './components';

const HomePage = ({ global: { plugins }, history: { push } }) => {
  return (
    <>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Block>
		<img src="https://jbaconsulting.ro/api/uploads/logo_strapi_bf5095b62c.png" alt="" style={{ margin: '10px', width: '150px', height: '150px'  }} />
		<a href="https://jbaconsulting.ro/api/admin/plugins/content-manager/collectionType/application::article.article/create" alt="">
		<h1> Add a new article </h1>
		</a>
	    </Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);