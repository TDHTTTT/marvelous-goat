import React from 'react';
import { SocialIcon } from 'react-social-icons';
import _ from 'lodash';

import {htmlToReact, withPrefix} from '../utils';

export default class SectionTeam extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className={'block team-block bg-' + _.get(section, 'background', null) + ' outer'}>
              <div className="block-header inner-small">
                {_.get(section, 'title', null) && (
                <h2 className="block-title">{_.get(section, 'title', null)}</h2>
                )}
                {_.get(section, 'subtitle', null) && (
                <p className="block-subtitle">
                  {htmlToReact(_.get(section, 'subtitle', null))}
                </p>
                )}
              </div>
              {_.get(section, 'team', null) && (
              <div className="inner">
                <div className="grid">
                  {_.map(_.get(section, 'team', null), (team, team_idx) => (
                  <div key={team_idx} className="cell teammate">
                    <div className="card">
                    <div className="team-header">
                        {_.get(team, 'avatar', null) && (
                        <img className="team-avatar" src={withPrefix(_.get(team, 'avatar', null))} alt={_.get(team, 'avatar_alt', null)}/>
                        )}
                    
                    <div className="team-author">{_.get(team, 'author', null)}</div>
                    <div className="team-title">{_.get(team, 'title', null)}</div>
                    <div className="team-social">
                        <SocialIcon url={withPrefix(_.get(team, 'linkedin', null))} style={{ height: 25, width: 25 }}/>
                    </div>
                    </div>
                    <p className="team-text">{htmlToReact(_.get(team, 'content', null))}</p>

                    </div>
                  </div>
                  ))}
                </div>
              </div>
              )}
            </section>
        );
    }
}
