import React from "react";
import { connect } from "react-redux";
import { State } from "../reducers";

type NewsProps = {
  news: {
    articles: Record<string, string>[];
  };
};

const NewsList: React.FC<NewsProps> = ({ news }) => {
  return (
    <>
      {news && news.articles && (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Author</th>
              <th>Title</th>
              <th>Description</th>
              <th>Link</th>
              <th>LinkImage</th>
              <th>Published Time</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            {/* {news.articles.map((item, index) => (
              <tr key={index}>
                {Object.keys(item).map((article, order) => {
                  if (typeof item[article] === "string") {
                    if (article === "url") {
                      return (
                        <td key={order}>
                          <a target="_blank" href={item[article]}>
                            {item[article]}
                          </a>
                        </td>
                      );
                    } else {
                      return <td key={order}>{item[article]}</td>;
                    }
                  } else if (!item[article]) {
                    return <td key={order}>None</td>;
                  }
                })}
              </tr>
            ))} */}
          </tbody>
        </table>
      )}
    </>
  );
};

const mapStateToProps = (state: State) => ({
  news: state.news,
});

export default connect(mapStateToProps)(NewsList);
