import React, { Suspense, lazy } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

/* loader component for Suspense*/
import PageLoader from './components/Common/PageLoader';

import Layout from './components/layout/Layout';

/* Used to render a lazy component with react-router */
const waitFor = Tag => props => <Tag {...props} />;

const AddNewEvent = lazy(() => import('./components/AddNewEvent'));
const Dashboard = lazy(() => import('./components/Dashboard/Dashboard'));

const Routes = ({ location }) => {
    const currentKey = location.pathname.split('/')[1] || '/';
    const timeout = { enter: 500, exit: 500 };

    // Animations supported
    //      'rag-fadeIn'
    //      'rag-fadeInRight'
    //      'rag-fadeInLeft'

    const animationName = 'rag-fadeIn'

    return (
        <Layout>
            <TransitionGroup>
                <CSSTransition key={currentKey} timeout={timeout} classNames={animationName} exit={false}>
                    <div>
                        <Suspense fallback={<PageLoader />}>
                            <Switch location={location}>
                                <Route path="/dashboard" component={waitFor(Dashboard)} />
                                <Route path="/events" component={waitFor(AddNewEvent)} />


                                <Redirect to="/dashboard" />
                            </Switch>
                        </Suspense>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </Layout>
    )
}

export default withRouter(Routes);
